import { Router } from "express";

const cartRouter = Router()

cartRouter.post('/', async (req, res) => {
    const confirmacion = await cartManager.createCart()
    if (confirmacion) {
        res.status(200).send("Carrito creado correctamente")
    } else {
        res.status(400).send("Error al crear carrito")
    }
})

cartRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    const cart = await cartManager.getCartById(id) // {id: "idEjemplo", products:[{id:"idProducto", quantity: 5},...]}

    if (cart)
        res.status(200).send(cart.products)
    else
        res.status(404).send("Carrito no encontrado")

})

cartRouter.post('/:cid/products/:pid', async (req, res) => {
    const { cid, pid } = req.params

    const cart = await cartManager.getCartById(cid) // {id: "idEjemplo", products:[{id:"idProducto", quantity: 5},...]}


    if (cart) {
        const confirmacion = await cartManager.addProduct(cid, pid)
        if (confirmacion)
            res.status(200).send("Producto agregado correctamente")
        else
            res.status(400).send("Error al agregar producto")
    } else {
        res.status(404).send("Carrito no encontrado")
    }


})

export default cartRouter