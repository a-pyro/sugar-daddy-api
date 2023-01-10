"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProd = exports.MONGO_URI = exports.CLIENT_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 8001;
exports.CLIENT_URL = process.env.CLIENT_URL;
exports.MONGO_URI = process.env.MONGO_URI;
exports.isProd = process.env.NODE_ENV === 'production';
//# sourceMappingURL=env.js.map