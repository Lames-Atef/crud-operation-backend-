import userModel from "../../../../DB/model/User.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js"

export const profileUser=async (req,res,next)=>{
    const user=await userModel.findById(req.user_id)      
    return res.json({message:"done",user}) 
}

export const deleteUser=asyncHandler( async(req,res,next)=>{
  
        const user=await userModel.findByIdAndDelete({_id:req.user._id}) 
        return user?res.json({message:"done",user}):res.json({message:"in valid user"})

 
})

export const updateUser=asyncHandler( async (req,res,next)=>{
   
      const{age,name}=req.body
      const user=await userModel.findByIdAndUpdate({_id:req.user._id},{age,name},{new:true}).select("password")
      return user?res.json({message:"done",user}):res.json({message:"in valid user"})
    })