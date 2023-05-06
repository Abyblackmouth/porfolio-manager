const express = require('express')

const app = express()

app.get('/', (request, response) => {
    console.log("Peticion recibida")
})

app .listen(8080, () => {
    console.log("Servidor conectado :D")
})

