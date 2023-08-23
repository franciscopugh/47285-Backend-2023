import express from 'express'
import multer from 'multer'
import prodsRouter from "./routes/products.routes.js";
import cartRouter from './routes/carts.routes.js';
import { __dirname } from './path.js';
import { engine } from 'express-handlebars';

import path from 'path';

const PORT = 4000
const app = express()

//Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img') //null hace referencia a que no envia errores
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`) //Concateno el nombre original de mi archivo con milisegundos con Date.now()
    }
})

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine()) //Defino que motor de plantillas voy a utilizar y su config
app.set('view engine', 'handlebars') //Setting de mi app de hbs
app.set('views', path.resolve(__dirname, './views')) //Resolver rutas absolutas a traves de rutas relativas
const upload = multer({ storage: storage })
app.use('/static', express.static(path.join(__dirname, '/public'))) //Unir rutas en una sola concatenandolas

//Routes
app.use('/api/products', prodsRouter)
app.use('/api/carts', cartRouter)
app.get('/static', (req, res) => {
    const user = {
        nombre: "Maria",
        cargo: "Tutor"
    }

    const cursos = [
        { numCurso: 123, dia: "S", horario: "Mañana" },
        { numCurso: 456, dia: "MyJ", horario: "Tarde" },
        { numCurso: 789, dia: "LyM", horario: "Noche" }
    ]
    res.render('home', {
        user: user,
        css: "home.css",
        title: "Home",
        esTutor: user.cargo === "Tutor",
        cursos: cursos
    })
})

app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("Imagen cargada")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})