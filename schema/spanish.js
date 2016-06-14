var mongoose = require('mongoose')
var spanishSchema = new mongoose.Schema({
    title: String,
    year: Number,
    mate: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

// spanishSchema.pre('save', function(next) {
//     if (this.isNew) {
//         this.meta.createAt = this.meta.updateAt = Date.now()
//     } else {
//         this.meta.updateAt = Date.now()
//     }
//     next()
// })
//
// spanishSchema.statics = {
//     fetch: function(cb) {
//         return this.find({}).sort('meta.updateAt').exec(cb)
//     },
//     findById: function(cb) {
//         return this.findOne({}).exec(cb)
//     }
// }

module.exports = spanishSchema
