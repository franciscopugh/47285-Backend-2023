import express from 'express'
import userRouter from './routes/users.routes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

mongoose.connect('mongodb+srv://franciscopugh01:password@cluster0.pkfhkpt.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('BDD conectada'))
    .catch(() => console.log('Error en conexion a BDD'))

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})