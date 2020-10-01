const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    ubicacion: {
        type: String
    },
    precio: {
        type: String
    },
    ambientes: {
        type: Number
    },
    dormitorios: {
        type: Number
    }
})
// haspassword before saving


module.exports = new mongoose.model('Product', productSchema)