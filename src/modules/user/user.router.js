import {Router} from 'express'
import * as userControl from  './controller/user.js'
const router = Router();
router.get("/profile",userControl.profileUser)
router.patch("/",auth,userControl.updateUser)
router.delete("/",auth,userControl.deleteUser)


export default  router