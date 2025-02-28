const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true 
    },
    dept: {
        type: String, 
        required: true, 
        trim: true 
    },
    empid: {
        type: Number, 
        required: true, 
        unique: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true, 
    }
});


const User = mongoose.model('User', userSchema);


module.exports = User;

