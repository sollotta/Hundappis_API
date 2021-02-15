var mongoose = require('mongoose');

var hundAppisSchema = new mongoose.Schema({
number: Number,
sign: String,
description: String,
advanced: String,
img: String
},
{
collection: 'hundappis'
});

module.exports = mongoose.model('hundAppisModel', hundAppisSchema);