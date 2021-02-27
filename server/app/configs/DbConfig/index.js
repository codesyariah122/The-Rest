import mongoose from 'mongoose'

const DbConfig = (url) => {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log(`Connection success to ${url}`)
	})
	.catch(err => console.log(err))

	mongoose.set('useFindAndModify', false)
}

export default DbConfig