// import mongoose from 'mongoose'
import mongoose from '../database/mongoose.js'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    value:{
        type: Number,
        require: true
    }
})

export const productModel = mongoose.model('Product', productSchema)