const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
require('dotenv').config()

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// DATABASE CONNECTION
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Backend running...')
})

// GET ALL CARS
app.get('/api/cars', async (req, res) => {

  try {

    const [rows] = await db.query(
      'SELECT * FROM cars'
    )

    res.json(rows)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      success: false,
      message: 'Failed to fetch cars',
    })
  }
})



// REGISTER USER
app.post('/api/auth/register', async (req, res) => {

  try {

    const { name, email, password } = req.body

    // CHECK IF USER EXISTS
    const [existingUsers] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    )

    if (existingUsers.length > 0) {

      return res.status(400).json({
        success: false,
        message: 'Email already exists',
      })
    }

    // INSERT USER
    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    )

    res.json({
      success: true,
      message: 'Account created successfully',
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      success: false,
      message: 'Registration failed',
    })
  }
})



// LOGIN USER
app.post('/api/auth/login', async (req, res) => {

  try {

    const { email, password } = req.body

    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    )

    if (rows.length === 0) {

      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    const user = rows[0]

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      success: false,
      message: 'Login failed',
    })
  }
})



// START SERVER
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})