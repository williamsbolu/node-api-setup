const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            // if null: there's no tour // This logic is for handlers querying documents based on id
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(204).json({
            status: 'success',
            data: null,
        });
    });

exports.updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!doc) {
            // if null: there's no document // This logic is for handlers querying documents based on id
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: doc,
        });
    });

exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body); // saves d document in d database & returns d newly creatd document with d id

        res.status(201).json({
            status: 'success',
            data: doc,
        });
    });

exports.getOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            // if null: there's no document // This logic is for handlers querying documents based on id
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: doc,
        });
    });

exports.getAll = (Model) =>
    catchAsync(async (req, res, next) => {
        const features = new APIFeatures(Model.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const doc = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: doc,
        });
    });
