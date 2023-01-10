"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SweetModel = void 0;
const mongoose_1 = require("mongoose");
// TODO - implement ingredients a separate CRUD
// const ingredientSchema = new Schema<Ingredient>({
//   name: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   unit: { type: String, required: true },
// })
// create mongoose schema for sweets
const sweetSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    //array of ingredients
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
        },
    ],
}, {
    timestamps: true,
});
// create mongoose model for sweets
exports.SweetModel = (0, mongoose_1.model)('sweets', sweetSchema);
//# sourceMappingURL=sweets.js.map