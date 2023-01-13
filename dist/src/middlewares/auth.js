"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (request, response, next) => {
    var _a;
    try {
        //   get the token from the authorization header
        const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        //check if the token matches the supposed origin
        const decodedToken = jsonwebtoken_1.default.verify(token, 'RANDOM-TOKEN');
        // retrieve the user details of the logged in user
        const user = decodedToken;
        // pass the user down to the endpoints here
        request.user = user;
        // pass down functionality to the endpoint
        next();
    }
    catch (error) {
        console.log(`auth error: ${error}`);
        response.status(401).json({
            message: 'Invalid request!',
        });
    }
};
//# sourceMappingURL=auth.js.map