import express from 'express'
import multer from 'multer'
import prodsRouter from "./routes/products.routes.js";
import { __dirname } from './path.js';
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
const upload = multer({ storage: storage })

//Routes
app.use('/api/products', prodsRouter)
app.use('/static', express.static(path.join(__dirname, '/public')))

app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("Imagen cargada")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})