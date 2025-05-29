
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes placeholder
app.get('/', (req, res) => {
  res.json({
    message: 'Pak Cyber Guard API - Backend scaffolding ready',
    version: '1.0.0',
    status: 'active'
  })
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found'
  })
})

module.exports = app
