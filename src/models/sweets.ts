import { Schema, model, Document } from 'mongoose'

export interface Ingredient {
  name: string
  quantity: number
  unit: string
}

export interface IngredientResponse extends Ingredient, Document {}

export interface Sweet {
  name: string
  price: number
  description: string
  ingredients: Ingredient[]
}

export interface SweetResponse extends Omit<Sweet, 'ingredients'>, Document {
  ingredients: IngredientResponse[]
}

// TODO - implement ingredients a separate CRUD
// const ingredientSchema = new Schema<Ingredient>({
//   name: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   unit: { type: String, required: true },
// })

// create mongoose schema for sweets
const sweetSchema = new Schema<SweetResponse>(
  {
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
  },
  {
    timestamps: true,
  }
)

// create mongoose model for sweets
export const SweetModel = model<SweetResponse>('sweets', sweetSchema)
