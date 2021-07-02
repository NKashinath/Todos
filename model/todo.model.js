const mongoose = require('mongoose');

const todoModel = mongoose.model('todoData', {
    nid: Number,
    notes: {
        type: String,
        required: [true, 'Notes is required']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = todoModel;