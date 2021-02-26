import {App} from './app/index.js'

export const Server = (port) => {
	App(port, () => {
		console.log(`Halo server sudah berjalan di port : ${port}`)
	})
}