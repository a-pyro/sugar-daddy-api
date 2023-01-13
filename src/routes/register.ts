import { Router } from 'express'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/users'
export const registerRoute = Router()

// register endpoint
registerRoute.post('/', (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new UserModel({
        email: request.body.email,
        password: hashedPassword,
        name: request.body.name,
      })

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: 'User Created Successfully',
            result,
          })
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: 'Error creating user',
            error,
          })
        })
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: 'Password was not hashed successfully',
        e,
      })
    })
})
