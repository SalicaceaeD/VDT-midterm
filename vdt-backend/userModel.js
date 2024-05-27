const mongoose = require('mongoose');

//schema
const schemaData = new mongoose.Schema({
    name: String,
    gender: String,
    school: String,
    email: String
});

const userModel = mongoose.model("user", schemaData);

module.exports = userModel;