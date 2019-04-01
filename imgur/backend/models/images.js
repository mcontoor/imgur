const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Images = new Schema({
    title: String,
    description: String,
    path: String,
})

module.exports.Images = mongoose.model('Images', Images);