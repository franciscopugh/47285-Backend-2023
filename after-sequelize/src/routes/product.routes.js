import { Router } from "express";
import Product from "../models/products.models.js";

const productRouter = Router()

productRouter.get('/', async (req, res) => {
    try {
        const prods = await Product.findAll()
        res.status(200).send({ mensaje: 'OK', resultado: prods })
    } catch (e) {
        res.status(400).send({ erro: `Error al consultar productos: ${error}` })
    }
})

productRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const prod = await Product.findByPk(id)
        res.status(200).send({ mensaje: 'OK', resultado: prod })
    } catch (e) {
        res.status(400).send({ erro: `Error al consultar producto: ${error}` })
    }
})

productRouter.post('/', async (req, res) => {
    const { title, description, category, price, stock, code } = req.body
    try {
        const resultado = await Product.create({ title, description, price, category, stock, code })
        res.status(200).send({ mensaje: 'OK', resultado: resultado })
    } catch (e) {
        res.status(400).send({ erro: `Error al consultar productos: ${error}` })
    }
})

productRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, category, price, stock, code } = req.body
    try {
        const prod = await Product.findByPk(id)
        if (prod) {
            await prod.update({ title, description, category, price, stock, code })
            res.status(200).send({ mensaje: 'OK', resultado: prod })
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    } catch (e) {
        res.status(400).send({ erro: `Error al consultar producto: ${error}` })
    }
})

productRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const prod = await Product.findByPk(id)
        if (prod) {
            await prod.destroy()
            res.status(200).send({ mensaje: 'OK', resultado: prod })
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    } catch (e) {
        res.status(400).send({ erro: `Error al consultar producto: ${error}` })
    }
})

export default productRouter