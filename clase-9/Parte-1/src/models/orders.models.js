import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

export const orderModel = model('order', orderSchema)