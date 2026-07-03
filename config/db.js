const mongoose = require("mongoose");
require("dotenv").config();

console.log("URI:", JSON.stringify(process.env.MONGO_URI));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err);
    }
};

connectDB();

module.exports = mongoose;