import { Document } from 'mongoose'
import { Response, Request } from 'express'

export interface Ingredient extends Document {
  name: string
  quantity: number
  unit: string
}

export interface TypedRequest<T> extends Request {
  body: T
}
export interface TypedResponse<T> extends Response {
  send(arg: T | T[] | string): this
}
