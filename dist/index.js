"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
exports.app = (0, express_1.default)();
// CORS
exports.app.use((0, cors_1.default)());
// body parser
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => {
    console.table(req);
    res.send('Hello World!');
});
exports.app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
exports.app.listen(env_1.PORT, () => {
    console.log(`Server running faster than the speed of light on port ${env_1.PORT} ⚡️`);
});
console.table((0, express_list_endpoints_1.default)(exports.app));
//# sourceMappingURL=index.js.map