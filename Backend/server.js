const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect((err) => {
  if (err) {
    console.log('Database connection failed:', err)
  } else {
    console.log('MySQL Connected')
  }
})

// GET ALL CARS
app.get('/api/cars', (req, res) => {
  const sql = 'SELECT * FROM cars'

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)
  })
})

// START SERVER
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})