import {Router} from 'express'
import * as messageController from  './controller/message.js'
const router = Router();

router.post("/:userId",messageController.addMessage)


export default  router