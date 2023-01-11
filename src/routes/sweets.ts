// sweets routes
import { Router } from 'express'
import { Error } from 'mongoose'
import { TypedRequest, TypedResponse } from 'src/types'
import { Sweet, SweetModel, SweetResponse } from '../models/sweets'

interface SweetRequest extends TypedRequest<Sweet> {}

interface ExpressSweetResponse extends TypedResponse<SweetResponse> {}

export const sweetsRoutes = Router()

// TODO implement error handling middleware

// GET /sweets
sweetsRoutes.get('/', async (_req, res: ExpressSweetResponse) => {
  try {
    const sweets = await SweetModel.find()
    res.status(200).send(sweets)
  } catch (error) {
    res.status(500).send('Something went wrong 🤷‍♂️')
  }
})

// GET /sweets/:id
sweetsRoutes.get(
  '/:id',
  async (req: SweetRequest, res: ExpressSweetResponse) => {
    try {
      const sweet = await SweetModel.findById(req.params.id)
      if (sweet) return res.status(200).send(sweet)
      else return res.status(404).send('Sweet not found 🥲')
    } catch (error) {
      console.log(error)
      res.status(500).send('Something went wrong 🤷‍♂️')
    }
  }
)

// POST /sweets
sweetsRoutes.post('/', async (req: SweetRequest, res: ExpressSweetResponse) => {
  try {
    const newSweet = await SweetModel.create(req.body)
    return res.status(201).send(newSweet)
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).send('Validation error 🤦‍♂️')
    } else {
      res.status(500).send('Something went wrong 🤷‍♂️')
    }
  }
})

// PUT /sweets/:id
sweetsRoutes.put(
  '/:id',
  async (req: SweetRequest, res: ExpressSweetResponse) => {
    try {
      // reaise error if the body is not in the correct format
      const sweet = await SweetModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )
      if (sweet) return res.status(200).send(sweet)
      else return res.status(404).send('Sweet not found 🥲')
    } catch (error) {
      if (error instanceof Error.ValidationError) {
        res.status(400).send('Validation error 🤦‍♂️')
      } else {
        res.status(500).send('Something went wrong 🤷‍♂️')
        console.log(error)
      }
    }
  }
)

// DELETE /sweets/:id
sweetsRoutes.delete(
  '/:id',
  async (req: SweetRequest, res: ExpressSweetResponse) => {
    try {
      const sweet = await SweetModel.findByIdAndDelete(req.params.id)
      if (sweet) return res.status(200).send('Sweet deleted 😒')
      else return res.status(404).send('Sweet not found 🥲')
    } catch (error) {
      res.status(500).send('Something went wrong 🤷‍♂️')
    }
  }
)
