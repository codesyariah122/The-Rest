import dotenv from 'dotenv'
import {Server} from './server/app.js'

dotenv.config()
const port = process.env.PORT

Server(port)