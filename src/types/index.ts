import { Response, Request } from 'express'

export interface TypedRequest<T> extends Request {
  body: T
}
export interface TypedResponse<T> extends Response {
  send(arg: T | T[] | string): this
}

export interface MongoDocument {
  _id: string
  createdAt: string
  updatedAt: string
}
