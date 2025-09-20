const mongoose = require("mongoose");


const connectMongo =async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("database successfully connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectMongo;