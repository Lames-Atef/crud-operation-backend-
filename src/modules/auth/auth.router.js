import {Router} from 'express'
import * as authController from  './controller/auth.js'
import * as validator from "./auth.validation.js"
import validationSchema from '../../../middleWare/validation.js';
const router = Router();
router.post("/signin",validationSchema(validator.validateLogin),authController.signIn)
router.post("/login",validationSchema(validator.validateSignup),authController.logIn)


export default  router