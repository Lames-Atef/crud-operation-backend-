import {Router} from 'express';
import {auth} from "../../../middleWare/auth.middleware.js"

import * as userControl from  './controller/user.js'
const router = Router();
router.get("/profile",auth,userControl.profileUser)
router.patch("/",userControl.updateUser)
router.delete("/",userControl.deleteUser)


export default  router