

import { Schema, model, Types } from "mongoose";

const messageSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const messageModel = model('Note', messageSchema)
export default messageModel