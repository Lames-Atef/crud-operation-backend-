import mongoose from 'mongoose';


const connectDB = async () => {
    return await mongoose.connect("mongodb+srv://lames:25121996@cluster0.awd6bry.mongodb.net/mongodb3")
    .then(result => {
        console.log(`Db Connected.........`);
    }).catch(err => console.log(`Fail to connectDB ,,,,,,,,,,, ${err}`))
}
export  default  connectDB