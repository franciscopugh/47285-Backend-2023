/*
    Proceso de encriptacion
    1) Algoritmo de encriptacion
    2) Key o clave
    3) Iv o vector de inicializacion



import * as crypto from 'crypto'

console.log(crypto.getCiphers()) //Consultar por AdE
//0-9 0-F -> 0000 1111
//1 Byte = 8 bits = 1 bit = 0 o 1  0000 0000

const algoritm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const encriptar = (password) => {
    //Buffer.from() me sirve para consultar los buffer
    const cipher = crypto.createCipheriv(algoritm, Buffer.from(key), Buffer.from(iv)) //Objeto para encriptar la contraseña
    cipher.update(password) //Preparo el objeto para encriptarlo
    let passwordEncriptada = cipher.final() //Devuelvo la contraseña encriptada
    console.log(passwordEncriptada.toString('hex'))
    return passwordEncriptada
}

const hackerman = (passwordE) => {
    const decipher = crypto.createDecipheriv(algoritm, Buffer.from(key), Buffer.from(iv))
    decipher.update(passwordE)
    let password = decipher.final()
    console.log(password.toString())
}

const passwordE = encriptar("Coder1234")
hackerman(passwordE)*/

import moment from 'moment'

const fechaActual = moment()
const cumpleaños = moment('1990-10-10')
console.log(cumpleaños)

if (cumpleaños.isValid())
    console.log("Es valido")
else
    console.log("No es valido")

const dias = fechaActual.diff(cumpleaños, 'days')

console.log(dias)