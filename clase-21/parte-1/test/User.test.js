import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";
import Assert from 'assert'

const assert = Assert.strict

await mongoose.connect(``)

describe('Test CRUD de Usuarios en la ruta api/users', function () {
    //Previo a comenzar todo el test
    before(() => {
        console.log("Arrancando el test")
    })

    //Previo a arrancar cada uno de los test
    beforeEach(() => {
        console.log("Comienza test!")
    })

    it('Obtener todos los usuarios mediante metodo GET', async () => {
        const users = await userModel.find()

        assert.strictEqual(Array.isArray(users), true)
    })

    it('Obtener un usuario mediante metodo GET', async () => {
        const user = await userModel.findById('650f27f998c24a5598347503')

        //assert.strictEqual(typeof user, 'object')
        assert.ok(user._id)
    })

    it('Crear un usuario mediante metodo POST', async () => {
        const newUser = {
            first_name: "Ramiro",
            last_name: "Ramirez",
            email: "rara@rara.com",
            password: "@arakr234341d@@"
        }

        const user = await userModel.create(newUser)

        assert.ok(user._id)
    })

    it('Actualizar un usuario mediante metodo PUT', async () => {
        const udpateUser = {
            first_name: "Fran",
            last_name: "Fran",
            email: "franco@fran.com",
            password: "@arakr234341d@@"
        }

        const user = await userModel.findByIdAndUpdate("650f27f998c24a5598347503", udpateUser)

        assert.ok(user._id)
    })

    it('Eliminar un usuario mediante metodo DELETE', async () => {

        const resultado = await userModel.findByIdAndDelete("657dc1eee6177a8b2a0f8755")

        assert.strictEqual(typeof resultado, 'object')
    })


})