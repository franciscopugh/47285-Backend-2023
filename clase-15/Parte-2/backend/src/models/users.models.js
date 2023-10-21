import { Schema, model } from "mongoose";
import { cartModel } from './carts.models.js'
import paginate from 'mongoose-paginate-v2'

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
        index: true
    },
    age: {
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
    },
    rol: {
        type: String,
        default: 'user'
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'carts'
    }
})

userSchema.plugin(paginate) //Implementar el metodo paginate en el schema

userSchema.pre('save', async function (next) {
    try {
        const newCart = await cartModel.create({})
        this.cart = newCart._id
    } catch (error) {
        next(error)
    }

})


//Parametro 1:Nombre coleccion - Parametro 2: Schema 
export const userModel = model('users', userSchema)
