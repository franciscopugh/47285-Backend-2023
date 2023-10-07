import express from 'express'
import { fork } from 'node:child_process'

const app = express()

console.log("PID de Main", process.pid)

app.get('/suma', (req, res) => {
    const child = fork('./calculoMatematico.js')//Calcular los hijos necesarios para este proceso
    child.send("Ejecutate") //Todos los subprocesos calculados reiben este mensaje
    child.on('message', resultado => {
        res.send(`${resultado}`)
    })
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})