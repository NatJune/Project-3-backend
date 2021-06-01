
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    currentcompany: String,
    currenttitle: String,
    educator: String,
    areaOfExpertise: String,
    comments: [String]
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema);