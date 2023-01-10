"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = require("mongoose");
const sweets_1 = require("./src/routes/sweets");
const env_1 = require("./config/env");
exports.app = (0, express_1.default)();
// CORS
exports.app.use((0, cors_1.default)());
// body parser
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use('/sweets', sweets_1.sweetsRoutes);
console.table((0, express_list_endpoints_1.default)(exports.app));
(0, mongoose_1.connect)(`${env_1.MONGO_URI}`)
    .then(() => {
    exports.app.listen(env_1.PORT, () => {
        // log mongoose connection status
        if (mongoose_1.connection.readyState === 1)
            console.log('Connected to MongoDB 🍃');
        console.log(`Server running faster than the speed of light on port ${env_1.PORT} ⚡️`);
    });
})
    .catch(console.error);
//# sourceMappingURL=index.js.map