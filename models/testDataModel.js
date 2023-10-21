const mongoose = require('mongoose');

const testDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A test schema must have a name'],
        unique: true,
        maxlength: [40, 'A tour name must have less or equal than 40 characters'],
        minlength: [10, 'A tour name must have more or equal than 10 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    price: {
        type: Number,
        required: [true, 'A test schema must have a price'],
    },
    description: {
        type: String,
        maxlength: [100, 'A tour description must have less or equal than 40 characters'],
        minlength: [10, 'A tour description must have more or equal than 10 characters'],
    },
});

const TestData = mongoose.model('TestData', testDataSchema);

module.exports = TestData;
