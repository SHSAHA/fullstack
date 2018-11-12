const mongoose = require('mongoose');

const shoppingItemSchema = mongoose.Schema({


    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemBought: {
        type: Boolean,
        required: true
    },
    
});

const Item = module.exports = mongoose.model('Item',shoppingItemSchema);