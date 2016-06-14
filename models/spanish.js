var mongoose = require('mongoose');
var spanishSchema = require('../schema/spanish');
var spanish = mongoose.model('spanish', spanishSchema)

module.exports = spanish
