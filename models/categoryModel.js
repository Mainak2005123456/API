 const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({

    category_name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    city: {
        type: String
    }

});

const category = mongoose.model("category", categorySchema);

module.exports = category;