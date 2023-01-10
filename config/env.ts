import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 8001
export const CLIENT_URL = process.env.CLIENT_URL!
export const MONGO_URI = process.env.MONGO_URI!
export const isProd = process.env.NODE_ENV === 'production'
