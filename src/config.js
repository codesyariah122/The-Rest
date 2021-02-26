import mongoose from 'mongoose'

const Config = () => {
	mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connection Success ! ')
	})
	.catch((err) => console.log(err))

	mongoose.set('useFindAndModify', false)
}

export default Config