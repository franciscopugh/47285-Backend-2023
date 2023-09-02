import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    email: {
        type: String,
        unique: true
    },
    password: String
})
//Parametro 1:Nombre coleccion - Parametro 2: Schema 
export const userModel = model('users', userSchema)
