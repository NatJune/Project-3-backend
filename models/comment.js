
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
 user: String,
 text: String,
}, { timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);