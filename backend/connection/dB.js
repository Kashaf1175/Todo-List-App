const mongoose = require('mongoose');

const dB = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://user:1234@cluster0.9pana.mongodb.net/")
        .then(() => {
            console.log('MongoDB connected successfully');
        });
        } catch (error) {
            res.status(400).json({ message: 'Error connecting to MongoDB',
        });
    }
}

dB();