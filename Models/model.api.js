const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    created_At: {
        type: Date, 
        default: new Date()
    },
    update_At: {
        type: Date,
        default: new Date()
    }
}, {
    _id: false
})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
};