const express = require('express')
const app = express()
const port = 3000
const data = require('./data/info.json') 

app.get('/categories', (req, res) => {
  res.send(data)
})
 
app.listen(port, () => {
  console.log(`SERVIDOR ON http://localhost:${port}`)
});