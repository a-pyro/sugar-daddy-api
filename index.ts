import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import { PORT } from './config/env'

export const app = express()

// CORS
app.use(cors())

// body parser
app.use(express.json())

app.get('/', (req, res) => {
  console.table(req)
  res.send('Hello World!')
})

app.get('/ping', (_req, res) => {
  return res.send('pong 🏓')
})

app.listen(PORT, () => {
  console.log(
    `Server running faster than the speed of light on port ${PORT} ⚡️`
  )
})

console.table(listEndpoints(app))
