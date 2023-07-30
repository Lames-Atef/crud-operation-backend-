import messageModel from "../../../../DB/model/message.model.js"
import userModel from "../../../../DB/model/User.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js"

export const getMessage=asyncHandler(
    async (req,res,next)=>{
    const listMessage=await messageModel.find({userId:user._id,message})
    return req.json({message:"done",message})
    
    }
)

export const addMessage=asyncHandler(
    async (req,res,next)=>{
        const{userId}=req.params
        const {message}=req.body
        const user=await userModel.findById(userId)
    if(!user){
        return next(new Error("not register user"))
    }
    const newMessage=await messageModel.create({userId:user._id,message})
    return req.json({message:"done",message})
    
    }
)