/*import { promises as fs } from 'fs'

const addProduct = async () => {
    await fs.readFile('ruta', 'utf-8')
}

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    async addProduct() {
        await fs.readFile(this.path, 'utf-8')
    }
}

import http from 'http'

const PORT = 4000
//req = request y res = response
const server = http.createServer((req, res) => {
    res.end("Hola, buenos dias")
})

//Iniciar mi servidor
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})*/

import express from 'express'

const PORT = 4000
//Genero una instancia de express en app
const app = express()

const prods = [
    { id: 1, nombre: "Papas Fritas", categoria: "Snacks" },
    { id: 2, nombre: "Lentejas", categoria: "Legumbres" },
    { id: 3, nombre: "Nachos", categoria: "Snacks" }
]

app.get('/', (req, res) => {
    res.send("Hola, buenos dias")
})

app.get('/products', (req, res) => {
    console.log(req.query)
    const { categoria } = req.query
    if (categoria) {
        const products = prods.filter(prod => prod.categoria === categoria)
        //const products = prods.filter(prod => prod.categoria === categoria[0] || prod.categoria === categoria[1])
        res.send(products)
    }

    res.send(prods) //Siempre retorno en formato String (JSON en este caso)

})

app.get('/products/:id', (req, res) => {
    const prod = prods.find(prod => prod.id === parseInt(req.params.id))

    if (prod)
        res.send(prod)
    else
        res.send("Producto no existente")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})