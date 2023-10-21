const TestData = require('../models/testDataModel');
const factory = require('./handlerFactory');

exports.getAllTestData = factory.getAll(TestData);
exports.getTestData = factory.getOne(TestData);
exports.createTestData = factory.createOne(TestData);
exports.updateTestData = factory.updateOne(TestData);
exports.deleteTestData = factory.deleteOne(TestData);
