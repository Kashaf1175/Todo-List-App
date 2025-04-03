const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,        
    },
    body: {
        type: String,
        required: true,        
    },
    user: [
            {
                type: mongoose.Types.objectId,
                ref: "User",
            },
        ],
});

module.exports = mongoose.model("List", listSchema);