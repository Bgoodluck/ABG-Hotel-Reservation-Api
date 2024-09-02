const mongoose = require ("mongoose")
const dotenv = require("dotenv")


dotenv.config();

const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://bisigoodluck:24SSWia3H4iFNCgL@clustertechnotronix.yxle6pl.mongodb.net/abg-travels-api').then (() => console.log("DB Connected"));
}



module.exports = connectDB;

