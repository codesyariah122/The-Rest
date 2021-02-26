import cors from 'cors'
import bodyParser from 'body-parser'
import router from './router.js'

export const middleware = (app) => {
	const corsOption = {
		origin: process.env.ORIGIN
	}
	app.use(cors(corsOption))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use('/api/data', router)
}