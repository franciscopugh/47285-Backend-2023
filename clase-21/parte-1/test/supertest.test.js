import chai from 'chai'
import mongoose from 'mongoose'
import supertest from 'supertest'
import __dirname from '../src/__dirname.js'
const expect = chai.expect

const requester = supertest('http://localhost:8080')

await mongoose.connect('')
/*
describe('Test CRUD de Mascotas en la ruta api/pets', function () {

    it('Ruta: api/pets metodo GET', async () => {

        const { ok } = await requester.get('/api/pets')

        expect(ok).to.be.ok

    })

    it('Ruta: api/pets metodo POST', async () => {
        const newPet = {
            name: "Copito de nieve",
            specie: "Gato",
            birthDate: '01-01-2000'
        }

        const { statusCode, _body, ok } = await requester.post('/api/pets').send(newPet)
        //expect(statusCode).to.be.equal(200)
        //expect(_body.status).to.be.equal('success')
        expect(ok).to.be.ok

    })

    it('Ruta: api/pets metodo POST cargando una imagen', async () => {
        const newPet = {
            name: "Cual",
            specie: "Perro",
            birthDate: '01-01-2002'
        }
        console.log(__dirname)
        const { status, _body } = await requester.post('/api/pets/withimage')
            .field('name', newPet.name)
            .field('specie', newPet.specie)
            .field('birthDate', newPet.birthDate)
            .field('image', `${__dirname}/public/img/perro.jpg`)

        expect(status).to.be.ok
        expect(_body.payload).to.have.property('_id')
        expect(_body.payload.image).to.be.ok
    })

    it('Ruta: api/pets metodo PUT', async () => {
        const id = '657ddaca494b34e13a643cea'
        const udpatePet = {
            name: "Marroncito de tierra",
            specie: "Gato",
            birthDate: '01-01-2000'
        }

        const { ok } = await requester.put(`/api/pets/${id}`).send(udpatePet)

        expect(ok).to.be.ok

    })

    it('Ruta: api/pets metodo DELETE', async () => {
        const id = '657ddaca494b34e13a643cea'
        const { ok } = await requester.delete(`/api/pets/${id}`)

        expect(ok).to.be.ok

    })

})*/

describe('Test Users Session api/session', function () {
    let cookie = {}

    it("Ruta: api/session/register con metodo POST", async () => {
        const newUser = {
            first_name: "Sandra",
            last_name: "Sanchez",
            email: "sane131we@saewn131223.com",
            password: "sa@sa.com"
        }

        const { _body } = await requester.post('/api/sessions/register').send(newUser)

        expect(_body.payload).to.be.ok
    })
    //657de58921418d1b3bdc2126

    it("Ruta: api/session/login con metodo POST", async () => {
        const user = {
            email: "san@san.com",
            password: "sa@sa.com"
        }

        const resultado = await requester.post('/api/sessions/login').send(user)
        const cookieResult = resultado.headers['set-cookie'][0]

        expect(cookieResult).to.be.ok

        //clave = valor
        cookie = {
            name: cookieResult.split("=")[0],
            value: cookieResult.split("=")[1]
        }

        expect(cookie.name).to.be.ok.and.equal('coderCookie')
        expect(cookie.value).to.be.ok
    })

    it("Ruta: api/session/current con metodo GET", async () => {

        const { _body } = await requester.get('/api/sessions/current')
            .set('Cookie', [`${cookie.name} = ${cookie.value}`])

        console.log(_body.payload)

        expect(_body.payload.email).to.be.equal('san@san.com')
    })

})