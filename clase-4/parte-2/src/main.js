import express from 'express'

const PORT = 4000
//Genero una instancia de express en app
const app = express()

app.use(express.json()) //Defino que esta aplicacion conozca JSON

let prods = [
    { id: 1, nombre: "Papas Fritas", categoria: "Snacks", code: "S1", precio: 520 },
    { id: 2, nombre: "Lentejas", categoria: "Legumbres", code: "L1", precio: 670 },
    { id: 3, nombre: "Nachos", categoria: "Snacks", code: "S2", precio: 700 }
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
        res.status(200).send(products)
    }

    res.status(200).send(prods) //Siempre retorno en formato String (JSON en este caso)

})

app.get('/products/:id', (req, res) => {
    const prod = prods.find(prod => prod.id === parseInt(req.params.id))

    if (prod)
        res.status(200).send(prod)
    else
        res.status(404).send("Producto no existente")
})

app.post('/products', (req, res) => {
    console.log(req.body)

    const producto = prods.find(prod => prod.code === req.body.code)

    if (producto) {
        res.status(400).send("Producto ya existente")
    } else {
        prods.push(req.body)
        res.status(200).send("Producto creado")
    }

})

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    console.log(req.body)
    const { nombre, categoria, code, precio } = req.body

    const productIndex = prods.findIndex(prod => prod.id === parseInt(id))

    if (productIndex != -1) {
        prods[productIndex].nombre = nombre
        prods[productIndex].categoria = categoria
        prods[productIndex].code = code
        prods[productIndex].precio = precio
        res.status(200).send(`Producto ${nombre} actualizado`)
    } else {
        res.status(404).send("Producto no encontrado")
    }

})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params

    const productIndex = prods.findIndex(prod => prod.id === parseInt(id))

    if (productIndex != -1) {
        prods = prods.filter(prod => prod.id != parseInt(id))
        res.status(200).send(`Producto eliminado`)
    } else {
        res.status(404).send("Producto no encontrado")
    }

})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})