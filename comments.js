// Create web server
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const fs = require('fs')

// Body parser
app.use(bodyParser.json())

// Read file
app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found')
    }
    res.send(data)
  })
})

// Write file
app.post('/comments', (req, res) => {
  fs.writeFile('./comments.json', JSON.stringify(req.body), 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Internal server error')
    }
    res.send('Write file successfully')
  })
})

// Listen server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
