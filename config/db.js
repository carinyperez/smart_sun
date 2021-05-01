const mongoose = require('mongoose');
require('dotenv').config(); 
const mongoDB = process.env.mongoDB; 
const db = () => {
    try {
        mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
            .then(() => { console.log('MongoDB Connected') })

    } catch (err) {
        console.error(err.message);
        // Exit process with failure 
        process.exit(1);
    }
}
module.exports = db;