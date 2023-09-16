import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import sessionRouter from './routes/session.routes.js'
const app = express()
const PORT = 4000

//BDD
mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log('BDD conectada')
    })
    .catch(() => console.log('Error en conexion a BDD'))


//Middlewares
app.use(express.json())
app.use(cookieParser(process.env.SIGNED_COOKIE)) // La cookie esta firmada
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: {
            useNewUrlParser: true, //Establezco que la conexion sea mediante URL
            useUnifiedTopology: true //Manego de clusters de manera dinamica
        },
        ttl: 60 //Duracion de la sesion en la BDD en segundos

    }),
    secret: process.env.SESSION_SECRET,
    resave: false, //Fuerzo a que se intente guardar a pesar de no tener modificacion en los datos
    saveUninitialized: false //Fuerzo a guardar la session a pesar de no tener ningun dato
}))

//Routes
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/sessions', sessionRouter)

//Server
app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})