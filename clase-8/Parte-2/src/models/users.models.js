import { Schema, model } from "mongoose";
import paginate from 'mongoose-paginate-v2'

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true,
        index: true
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

userSchema.plugin(paginate) //Implementar el metodo paginate en el schema

//Parametro 1:Nombre coleccion - Parametro 2: Schema 
export const userModel = model('users', userSchema)
