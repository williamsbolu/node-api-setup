const express = require('express');
const testDataController = require('../controllers/testDataController');

const router = express.Router();

router
    .route('/')
    .get(testDataController.getAllTestData)
    .post(testDataController.createTestData);

router
    .route('/:id')
    .get(testDataController.getTestData)
    .patch(testDataController.updateTestData)
    .delete(testDataController.deleteTestData);

module.exports = router;
