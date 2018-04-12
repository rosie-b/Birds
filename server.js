const express = require('express')

const PORT = process.env.PORT || 3000

const path = require('path')

const server = express()
server.use(express.static(path.join(__dirname, './public')))

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
