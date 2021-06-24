const mongoose = require("mongoose")
const SampleSchema = mongoose.Schema({
    Title: {
        type: 'string',
        required: true
    },
    Name:
    {
        type: "String",
        required: true
    },

    Department: {
        
        type: "String",
        required: true
    },
    Age: {
        type: "Number",
        required: true
    },

},
{
    timestamps: true
});

module.exports = mongoose.model('Note',SampleSchema);