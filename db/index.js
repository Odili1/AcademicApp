/**
 * Create a connection function for mongodb
 * 2. Start a local mongodb server connection
 */

const mongoose = require('mongoose');
const {config} = require('dotenv');
// const {MONGO_URI} = process.env


config();


// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log("MongoDB connected...");

//         // Send data

//     })
//     .catch((err)=>{
//         console.error(err.message);

//         // Exit with failure
//         process.exit(1)
//     })
// }

const connectDB = async(uri) => {
    try {
        mongoose.connect(uri || process.env.MONGO_URI)

        console.log("MongoDB connected...");

        // Send data
    } catch (error) {
        console.error(error.message)

        // Exit failure
        process.exit(1)
    }
}


module.exports = connectDB
