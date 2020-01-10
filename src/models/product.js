const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {

    timespamps: {
        createdAt: true,
        updatedAt: true
    },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false
})

const ProdModel = mongoose.model('Product', ProductSchema)

module.exports = ProdModel