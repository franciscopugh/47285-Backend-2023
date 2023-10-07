import { Schema, model } from "mongoose";

const messagesSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    postTime: {
        type: Date,
        default: Date.now //Devolve la fecha actual
    }
})

export const messageModel = model('messages', messagesSchema)