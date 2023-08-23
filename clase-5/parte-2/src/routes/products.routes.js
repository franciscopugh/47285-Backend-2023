import { Router } from "express";

const prodsRouter = Router()

prodsRouter.get('/', async (req, res) => {
    const { limit } = req.query

    const prods = await productManager.getProducts()

    const products = prods.slice(0, limit)

    res.status(200).send(products)
})

prodsRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    const prod = await productManager.getProductById(parseInt(id))

    if (prod)
        res.status(200).send(prod)
    else
        res.status(404).send("Producto no encontrado")

})

prodsRouter.post('/', async (req, res) => {

    const confirmacion = await productManager.addProduct(req.body)

    if (confirmacion) {
        res.status(200).send("Producto creado correctamente")
    } else {
        res.status(400).send("Error en crear producto")
    }


})

prodsRouter.put('/:id', async (req, res) => {

    const confirmacion = await productManager.updateProduct(parseInt(req.params.id), req.body)

    if (confirmacion) {
        res.status(200).send("Producto actualizado correctamente")
    } else {
        res.status(400).send("Error en actualizar producto")
    }

})

prodsRouter.delete('/:id', async (req, res) => {

    const confirmacion = await productManager.deleteProduct(parseInt(req.params.id))

    if (confirmacion) {
        res.status(200).send("Producto eliminado correctamente")
    } else {
        res.status(400).send("Error al eliminar producto")
    }

})


export default prodsRouter