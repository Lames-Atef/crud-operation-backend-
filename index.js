import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import initApp from './src/app.router.js';
const app = express()
const port = process.env.PORT || 3000
console.log({DB:process.env.LOCALDB})



initApp(app, express)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))