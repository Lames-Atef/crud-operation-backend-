import userModel from "../../../../DB/model/User.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js"
import { hash ,compare} from "../../../utils/hashandcompare.js"
import {generateToken} from "../../../utils/generateToken.js"


export const signIn=asyncHandler( async(req,res,next)=>{

   
        const{userName,email,password,cPassword,phone}=req.body
    console.log({userName,email,password,phone})
if(password!=cPassword){
    return next(new Error('password not match cPassword'))
}
    const checkUser=await userModel.findOne({email})
    if(checkUser){
        return next(new Error('email exist'))
    }
    const hashPassword=hash({
        plaintext:password
     } )
     const user=await userModel.create({userName,email,password:hashPassword,phone})
     return res.json({message:"done",user:user._id})

})

export const logIn=asyncHandler( async (req,res,next)=>{
   
        const{email,password}=req.body
    console.log({email,password});
    const user=await userModel.findOne({email})
    if(!user){
        return next(new Error("email not found"))
    }
    const match=compare({
        plaintext:password,
        hashValue:user.password
    })
if(!match){
    return next(new Error("password in valid"))
}
const token=generateToken({
    payload:{id:user._id,role:user.role},
    expiresIn:60*60
    })
    user.status="online",
    await user.save()
return res.json({message:"done",user})
   
}) 