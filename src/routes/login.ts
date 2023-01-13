import { Router } from 'express'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/users'
import jwt from 'jsonwebtoken'

export const loginRoute = Router()

// login endpoint
loginRoute.post('/', (request, response) => {
  // check if email exists
  UserModel.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user!.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return response.status(400).send({
              message: 'Passwords does not match',
            })
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user!._id,
              userEmail: user!.email,
              name: user!.name,
            },
            'RANDOM-TOKEN',
            { expiresIn: '24h' }
          )

          //   return success response
          response.status(200).send({
            message: 'Login Successful',
            email: user!.email,
            name: user!.name,
            token,
          })
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: 'Passwords does not match',
            error,
          })
        })
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: 'Email not found',
        e,
      })
    })
})
