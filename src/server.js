import {Listen} from './listen.js'

const Server = (port) => {
	Listen(port, () => {
		console.log(`Halo server sudah berjalan di port : ${port}`)
	})
}

export default Server