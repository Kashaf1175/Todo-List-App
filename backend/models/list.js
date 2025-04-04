const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  
        timestamps: true,      
    },
    body: {
        type: String,
        required: true, 
        timestamps: true,       
    },
    user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
}, { timestamps: true });

module.exports = mongoose.model("List", listSchema);