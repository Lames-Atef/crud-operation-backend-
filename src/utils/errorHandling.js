export const asyncHandler=(fu)=>{
    return(req,res,next)=>{
        fu(req,res,next).catch(error=>{
            return next(new Error("error",error))
        })
    }
}
export const globalHandler=(err,req,res,next)=>{
 if(err){
    return res.json({message:err.message,error:err.stack})

 }
}