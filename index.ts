import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import morgan from 'morgan'
import { connect, connection } from 'mongoose'
import { sweetsRoutes } from './src/routes/sweets'
import { registerRoute } from './src/routes/register'
import { loginRoute } from './src/routes/login'
import { MONGO_URI, PORT } from './config/env'
import auth, { AuthCustomRequest } from './src/middlewares/auth'

export const app = express()

// CORS
app.use(cors())

// body parser
app.use(express.json())

app.use(morgan('dev'))

app.get('/', (_req, res) => {
  // send image
  res.send(
    `<img src="https://media.giphy.com/media/28GHfhGFWpFgsQB4wR/giphy.gif">`
  )
})

app.use('/register', registerRoute)

app.use('/login', loginRoute)

// @ts-ignore // TODO - fix this
app.get('/auth-endpoint', auth, (_, response) => {
  return response.json({ message: 'You are authorized to access me' })
})

app.use('/sweets', sweetsRoutes)

console.table(listEndpoints(app))

connect(`${MONGO_URI}`)
  .then(() => {
    app.listen(PORT, () => {
      // log mongoose connection status
      if (connection.readyState === 1) console.log('Connected to MongoDB 🍃')
      console.log(
        `Server running faster than the speed of light on port ${PORT} ⚡️`
      )
    })
  })
  .catch((e) => console.log(`error during mongo connection: ${e}`))
