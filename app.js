import dotenv from 'dotenv'
import {Server, Config} from './src/index.js'

dotenv.config()
const port = process.env.PORT
Config()

Server(port)
