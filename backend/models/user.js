const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,        
    },
    username: {
        type: String,
        required: true,        
    },
    password: {
        type: String,
        required: true,        
    },
    list: [
        {
            type: mongoose.Types.objectId,
            ref: "List",
        },
    ],
});

module.exports = mongoose.model("User", userSchema);