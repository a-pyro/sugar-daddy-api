"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.loginRoute = (0, express_1.Router)();
// login endpoint
exports.loginRoute.post('/', (request, response) => {
    // check if email exists
    users_1.UserModel.findOne({ email: request.body.email })
        // if email exists
        .then((user) => {
        // compare the password entered and the hashed password found
        bcrypt_1.default
            .compare(request.body.password, user.password)
            // if the passwords match
            .then((passwordCheck) => {
            // check if password matches
            if (!passwordCheck) {
                return response.status(400).send({
                    message: 'Passwords does not match',
                });
            }
            //   create JWT token
            const token = jsonwebtoken_1.default.sign({
                userId: user._id,
                userEmail: user.email,
                name: user.name,
            }, 'RANDOM-TOKEN', { expiresIn: '24h' });
            //   return success response
            response.status(200).send({
                message: 'Login Successful',
                email: user.email,
                name: user.name,
                token,
            });
        })
            // catch error if password does not match
            .catch((error) => {
            response.status(400).send({
                message: 'Passwords does not match',
                error,
            });
        });
    })
        // catch error if email does not exist
        .catch((e) => {
        response.status(404).send({
            message: 'Email not found',
            e,
        });
    });
});
//# sourceMappingURL=login.js.map