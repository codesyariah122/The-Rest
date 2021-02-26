import express from 'express'
import {middleware} from './middleware/index.js'

export const App = (port, next) => {

	const app = express()
	
	middleware(app)

	app.listen(port, next())
}