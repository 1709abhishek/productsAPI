const mongoose = require('mongoose');

//product schema containing name and quantity as variables
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Products', productSchema);