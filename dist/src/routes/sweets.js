"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sweetsRoutes = void 0;
// sweets routes
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const sweets_1 = require("../models/sweets");
exports.sweetsRoutes = (0, express_1.Router)();
// TODO implement error handling middleware
// GET /sweets
exports.sweetsRoutes.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sweets = yield sweets_1.SweetModel.find();
        res.status(200).send(sweets);
    }
    catch (error) {
        res.status(500).send('Something went wrong 🤷‍♂️');
    }
}));
// GET /sweets/:id
exports.sweetsRoutes.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sweet = yield sweets_1.SweetModel.findById(req.params.id);
        if (sweet)
            return res.status(200).send(sweet);
        else
            return res.status(404).send('Sweet not found 🥲');
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong 🤷‍♂️');
    }
}));
// POST /sweets
exports.sweetsRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSweet = yield sweets_1.SweetModel.create(req.body);
        return res.status(201).send(newSweet);
    }
    catch (error) {
        if (error instanceof mongoose_1.Error.ValidationError) {
            res.status(400).send('Validation error 🤦‍♂️');
        }
        else {
            res.status(500).send('Something went wrong 🤷‍♂️');
        }
    }
}));
// PUT /sweets/:id
exports.sweetsRoutes.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // reaise error if the body is not in the correct format
        const sweet = yield sweets_1.SweetModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (sweet)
            return res.status(200).send(sweet);
        else
            return res.status(404).send('Sweet not found 🥲');
    }
    catch (error) {
        if (error instanceof mongoose_1.Error.ValidationError) {
            res.status(400).send('Validation error 🤦‍♂️');
        }
        else {
            res.status(500).send('Something went wrong 🤷‍♂️');
            console.log(error);
        }
    }
}));
// DELETE /sweets/:id
exports.sweetsRoutes.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sweet = yield sweets_1.SweetModel.findByIdAndDelete(req.params.id);
        if (sweet)
            return res.status(200).send('Sweet deleted 😒');
        else
            return res.status(404).send('Sweet not found 🥲');
    }
    catch (error) {
        res.status(500).send('Something went wrong 🤷‍♂️');
    }
}));
//# sourceMappingURL=sweets.js.map