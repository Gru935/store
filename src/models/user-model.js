// import mongoose from 'mongoose'
import mongoose from '../database/mongoose.js'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

export const userModel = mongoose.model('User', userSchema)