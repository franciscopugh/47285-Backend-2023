import express from 'express'
import { addLogger } from './config/logger.js'

const app = express()
app.use(addLogger)

app.get('/info', (req, res) => {
    req.logger.info('<span style="color:blue">Texto informativo de Info</span><br/>')
    res.send("Hola!")
})

app.get('/warning', (req, res) => {
    req.logger.warning('<span style="color:cyan">Texto Warning</span><br/>')
    res.send("Hola!")
})

app.get('/error', (req, res) => {
    req.logger.error('<span style="color:yellow">Texto Error</span><br/>')
    res.send("Hola!")
})

app.get('/fatal', (req, res) => {
    req.logger.fatal('<span style="color:red">Texto informativo de Info</span><br/>')
    res.send("Hola!")
})

app.get('/testArtillery', (req, res) => {
    res.send("Hola desde Artillery")
})
app.listen(4000, console.log("Server on port 4000"))