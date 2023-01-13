import { Schema, model } from 'mongoose'

export interface User {
  name: string
  email: string
  password: string
}

const userSchema = new Schema<User>(
  {
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
  },
  { timestamps: true }
)

export const UserModel = model<User>('users', userSchema)
