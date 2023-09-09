import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import { cartModel } from './models/carts.models.js'
const app = express()
const PORT = 4000

mongoose.connect('mongodb+srv://franciscopugh01:password@cluster0.pkfhkpt.mongodb.net/?retryWrites=true&w=majority')
    .then(async () => {
        console.log('BDD conectada')
        const resultados = await cartModel.findOne({ _id: '64fc9843ca4c1dc462396c11' }) //Indico en donde existe la referencia
        console.log(JSON.stringify(resultados))
    })
    .catch(() => console.log('Error en conexion a BDD'))

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})