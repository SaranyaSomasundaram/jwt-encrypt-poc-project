const mongoose = require('mongoose');

function connectdb() {
    // Database connection
    mongoose.connect('mongodb+srv://userdetail:userdetail@cluster0.iqvty.mongodb.net/api?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (!err) {
            console.log("mongodb connection succesful")
        }
        else {
            console.log("mongodb connection failed", err)
        }
    });
}

module.exports = connectdb