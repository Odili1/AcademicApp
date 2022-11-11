/** 
* 1. Creating an express server
* 2. Connect to MongoDB
* 3. Initialize express
* 4. initialize express middleware
* 5. Create a simple get request route (optional)
* 6. Inject our routes
* 7. Listen to our app connection
*/
const express = require('express');
const connectDB = require('./db');
require('dotenv').config()
const {PORT} = process.env

// Connect to db
connectDB();


// Initialize express
const app = express()


// Initalize Express middleware
app.use(express.json({extended: false}));


// Create a basic express route
app.get('/', (req, res) => res.json({message: 'Welcome diligwe'}))


// PORT
const port = process.env.PORT || PORT


// Listen
app.listen(port, () => console.log(`app running on port ${port}`))

