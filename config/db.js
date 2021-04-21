const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost:27017/smartSun';
const mongoDB = 'mongodb+srv://cariny123456:cariny123456@cluster0.zzxhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const db = async () => {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure 
        process.exit(1);
    }
}
module.exports = db;