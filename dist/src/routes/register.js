"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoute = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
exports.registerRoute = (0, express_1.Router)();
// register endpoint
exports.registerRoute.post('/', (request, response) => {
    // hash the password
    bcrypt_1.default
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new users_1.UserModel({
            email: request.body.email,
            password: hashedPassword,
            name: request.body.name,
        });
        // save the new user
        user
            .save()
            // return success if the new user is added to the database successfully
            .then((result) => {
            response.status(201).send({
                message: 'User Created Successfully',
                result,
            });
        })
            // catch error if the new user wasn't added successfully to the database
            .catch((error) => {
            response.status(500).send({
                message: 'Error creating user',
                error,
            });
        });
    })
        // catch error if the password hash isn't successful
        .catch((e) => {
        response.status(500).send({
            message: 'Password was not hashed successfully',
            e,
        });
    });
});
//# sourceMappingURL=register.js.map