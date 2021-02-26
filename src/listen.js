import express from 'express'
import {middleware} from './middleware.js'

export const Listen = (port, next) => {

	const app = express()
	
	middleware(app)

	app.listen(port, next())
}