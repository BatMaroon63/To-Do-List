const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed: {
        type: String,
        require: true
    },
    connected_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "Tasks"

});

module.exports = mongoose.model(
    "Todo",
    todoSchema
);
