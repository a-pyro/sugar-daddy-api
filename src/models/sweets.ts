import { Ingredient } from 'src/types'
import { Schema, model, Document } from 'mongoose'

export interface Sweet extends Document {
  name: string
  price: number
  description: string
  ingredients: Ingredient[]
  createdAt?: string
}

// TODO - implement ingredients a separate CRUD
// const ingredientSchema = new Schema<Ingredient>({
//   name: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   unit: { type: String, required: true },
// })

// create mongoose schema for sweets
const sweetSchema = new Schema<Sweet>(
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
export const SweetModel = model<Sweet>('sweets', sweetSchema)
