import cors from 'cors'
import bodyParser from 'body-parser'
import router from '../routers/index.js'
import {DbConfig} from '../configs/index.js'

export const middleware = (app) => {
	const corsOption = {
		origin: process.env.ORIGIN
	}
	app.use(cors(corsOption))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	
	DbConfig(process.env.DB_URL)

	app.use('/api/data', router)
}