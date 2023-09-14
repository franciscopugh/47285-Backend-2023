import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import { orderModel } from './models/orders.models.js'
import { userModel } from './models/users.models.js'
const app = express()
const PORT = 4000

mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log('BDD conectada')
        //Filtro - 
        const resultado = await userModel.paginate({ password: '1234' }, { limit: 20, page: 1, sort: { edad: 'asc' } })
        console.log(resultado)
        /*await orderModel.create([
            { name: 'Napolitana', size: 'medium', price: 4000, quantity: 3 },
            { name: 'Pepperoni', size: 'large', price: 2500, quantity: 1 },
            { name: 'Anchoas', size: 'medium', price: 2800, quantity: 2 },
            { name: '4 quesos', size: 'medium', price: 5000, quantity: 4 },
            { name: 'Napolitana', size: 'medium', price: 2000, quantity: 2 },
            { name: 'Anchoas', size: 'small', price: 1500, quantity: 1 },
            { name: 'Especial', size: 'small', price: 1800, quantity: 1 },
            { name: 'Jamon y morron', size: 'large', price: 2400, quantity: 2 },
            { name: 'Mozzarella', size: 'medium', price: 2500, quantity: 2 },
            { name: 'Especial', size: 'small', price: 1800, quantity: 1 },
            { name: 'Jamon crudo y rucula', size: 'large', price: 5000, quantity: 2 },
            { name: '4 quesos', size: 'medium', price: 3000, quantity: 2 },
            { name: 'Panceta y albahaca', size: 'large', price: 2500, quantity: 1 }

        ])

        const resultados = await orderModel.aggregate([
            {
                $match: { size: 'medium' }
            },
            {
                $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
            },
            {
                $sort: { totalPrice: 1 } //-1 mayor a menor, 1 menor a mayor
            },
            {
                $group: { _id: 1, orders: { $push: "$$ROOT" } } //$$ROOT el array generado hasta el momento, digase las ordenes de ventas
            },
            {
                $project: { //Generar un nuevo proyecto para guardar en la bdd
                    "_id": 0, //Id autogenerado
                    orders: "$orders"
                }
            },
            {
                $merge: {
                    into: "reports" //Guardo en la coleccion reports en MongoDB Atlas
                }
            }
        ])*/
    })
    .catch(() => console.log('Error en conexion a BDD'))

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})