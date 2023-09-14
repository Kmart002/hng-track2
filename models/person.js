const { default: mongoose } = require("mongoose");

const personSchema = new mongoose.Schema({
    name:{
        type: String
    }
});

module.exports = mongoose.model('Person', personSchema)