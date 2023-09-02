import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
//Parametro 1:Nombre coleccion - Parametro 2: Schema 
export const userModel = model('users', userSchema)
