import authRouter from './modules/auth/auth.router.js';
import userRouter from './modules/user/user.router.js'
import noteRouter from './modules/note/message.router.js';
import connectDB from '../DB/connection.js';
import { globalHandler } from './utils/errorHandling.js';




const initApp = (app, express) => {

    app.use(express.json({}))

    app.get('/', (req, res) => res.send('Hello World!'))

    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/note', noteRouter)

    app.use("*" , (req,res)=>{
        return res.json({message:"404 Page Not Found"})
    })
app.use(globalHandler)
    //DB connection
    connectDB()

}


export default initApp