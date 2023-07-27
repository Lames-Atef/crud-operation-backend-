import userModel from "../DB/model/User.model.js";
import { asyncHandler } from "../src/utils/errorHandling.js";

const auth=asyncHandler( async (req,res,next)=>{
  
    const{authorization}=req.headers
    console.log({authorization});
    if(!authorization?.startsWith("alaa__"))
    {
        return next(new Error("in-valid barer key"))
    }
    const token=authorization.split("alaa__")
    if(!token){
        return next(new Error("token is required"))
    }
    const decoded=verifyToken({token})
    if(!decoded?._id){
        return next(new Error("in-valid decoded"))
    }
    console.log(decoded);
    const authUser=await userModel.findById(decoded.id).select('userName email role status')
    if(!authUser){
        return next(new Error("not register account"))

    }
req.user=authUser
return next()
  

})