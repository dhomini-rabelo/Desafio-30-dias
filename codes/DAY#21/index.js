const express =  require('express')

const server  = express()

server.get('/test', (request, response) => {
    const name = request.query.name
    return response.send(`Hello World by ${name}`)
})

server.listen(3000)