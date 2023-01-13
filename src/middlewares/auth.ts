import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

export interface AuthCustomRequest extends Request {
  user: JwtPayload | string
}

export default (
  request: AuthCustomRequest,
  response: Response,
  next: NextFunction
) => {
  try {
    //   get the token from the authorization header
    const token = request.headers.authorization?.split(' ')[1]

    //check if the token matches the supposed origin
    const decodedToken = jwt.verify(token!, 'RANDOM-TOKEN')

    // retrieve the user details of the logged in user
    const user = decodedToken

    // pass the user down to the endpoints here
    request.user = user

    // pass down functionality to the endpoint
    next()
  } catch (error) {
    console.log(`auth error: ${error}`)
    response.status(401).json({
      message: 'Invalid request!',
    })
  }
}
