import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import initializePassport from './config/passport.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import router from './routes/index.routes.js'

const whiteList = ['http://127.0.0.1:5173']

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) != -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Acceso denegado"))
        }
    }
}

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
app.use(cors(corsOptions))
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

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', router)

//Server
app.listen(PORT, () => {
    console.log(`Server on Port ${PORT}`)
})