import chai from 'chai'
import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";

const expect = chai.expect

await mongoose.connect(``)

describe('Test CRUD Users con chai en api/users', function () {
    it('Obtener todos los usuarios mediante metodo GET', async () => {
        const users = await userModel.find()

        //expect(users).equal([]) Si espero array vacio
        // expect(Array.isArray(users)).to.be.ok //Verdadero es Ok y falso no
        expect(users).not.to.be.deep.equal([]) //Solamente pasa si el array contiene datos
    })

    it('Obtener un usuario mediante metodo GET', async () => {
        const user = await userModel.findById('657dcb8e934fa3c12d518176')

        expect(user).to.have.property('_id')
    })

    it('Crear un usuario mediante metodo POST', async () => {
        const newUser = {
            first_name: "Ramiro",
            last_name: "Ramirez",
            email: "ramiror1313r@rarar.com",
            password: "@arakr234341d@@"
        }

        const user = await userModel.create(newUser)

        expect(user).to.have.property('_id')
    })

    it('Actualizar un usuario mediante metodo PUT', async () => {
        const udpateUser = {
            first_name: "Fran",
            last_name: "Fran",
            email: "franco@fran.com",
            password: "@arakr234341d@@"
        }

        const user = await userModel.findByIdAndUpdate("657dcb8e934fa3c12d518176", udpateUser)

        expect(user).to.have.property('_id')
    })

    it('Eliminar un usuario mediante metodo DELETE', async () => {

        const resultado = await userModel.findByIdAndDelete("657dcb8e934fa3c12d518176")

        expect(resultado).to.be.ok
    })

})