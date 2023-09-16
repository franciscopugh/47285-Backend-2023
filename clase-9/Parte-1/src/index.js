import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import userRouter from './routes/users.routes.js'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'

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
    secret: process.env.SESSION_SECRET,
    resave: true, //Fuerzo a que se intente guardar a pesar de no tener modificacion en los datos
    saveUninitialized: true //Fuerzo a guardar la session a pesar de no tener ningun dato
}))

//Verifico si el usuario es admin o no
const auth = (req, res, next) => {
    if (req.session.email == "admin@admin.com" && req.session.password == "1234") {
        next() //Continua con la siguiente ejecucion
    }

    res.send("No tenes acceso a esta ruta")
}

//Routes
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.get('/setCookie', (req, res) => {
    res.cookie('CookieCookie', 'Esto es una cookie', { maxAge: 10000, signed: true }).send('Cookie generada')
})

app.get('/getCookie', (req, res) => {
    res.send(req.signedCookies) //Traeme solamente las cookies firmadas
})

app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Ingreso ${req.session.counter} veces`)
    } else {
        req.session.counter = 1
        res.send('Ingreso por primera vez')
    }
})

app.get('/login', (req, res) => {
    const { email, password } = req.body

    req.session.email = email
    req.session.password = password
    console.log(req.session.email)
    console.log(req.session.password)
    res.send('Usuario logueado')

})

app.get('/admin', auth, (req, res) => {
    res.send('Sos admin')
})

//Server
app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})