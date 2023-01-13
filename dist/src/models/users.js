"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        unique: false,
    },
    email: {
        type: String,
        required: [true, 'Please provide an Email!'],
        unique: true,
    },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)('users', userSchema);
//# sourceMappingURL=users.js.map