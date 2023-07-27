

import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required:true
    },
    status:{
        type:String,
        default:"offline",
        enum:["offline","online","block"]
    },
    role:{
        type:String,
        default:"User",
        enum:["User","admin"]
    }

   
}, {
    timestamps: true
})

const userModel = model('User' , userSchema)
export  default  userModel