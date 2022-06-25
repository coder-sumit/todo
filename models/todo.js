const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const toDo = mongoose.model('todo', todo);
module.exports = toDo;