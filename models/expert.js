
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expertSchema = new Schema({
    expert: String,
    names: String,
    email: String,
    phone: String,
    // time: String,
    // currentcompany: String,
    // currenttitle: String,
    // educator: String,
    // areaOfExpertise: String,
    // uid: String,
    // comments: [String]
}, { timestamps: true});

module.exports = mongoose.model('Expert', expertSchema);