import BookData from '../models/index.js'

export const getData = async(req, res) => {
	try{
		const books = await BookData.find()
		res.status(200).json({
			data: books
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const getDataById = async(req, res) => {
	const id = req.params.id
	try{
		const books = await BookData.findById(id)
		res.status(200).json({
			data: books
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}

export const getDataByPenulis = async(req, res) => {
	const penulis = req.params.penulis
	try{
		const books = await BookData.find({"penulis": {$regex: `.*${penulis}.*`}}, (err, result) => {
		
			if(result.length === 0) {
				res.status(200).json({
					data: `${penulis} data buku belum tersedia`
				})
			}else{			
				res.status(200).json({
					data: result
				}) 
			}
			
				
		})
	}catch(err){
		res.status(404).json({
			message: err.message
		})
	}
}


export const createBooks = async(req, res) => {
	const bookdata = req.body
	try{
		let books = new BookData(bookdata)
		books = await books.save()
		res.status(201).json({
			data: books
		})
	}catch(error){
		res.status(404).json({
			message: 'error store books'
		})
	}
}

export const updatedBooks = async(req, res) => {
	const id = req.params.id
	const {judul, penulis, genre, penerbit} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Buku dengan id : ${id}, data belum tersedia`)

	const books = {judul, penulis, genre, penerbit, id}

	await BookData.findAndModify(id, books, {new: true})
	res.status(200).json(books)
}

export const deletedBooks = async(req, res) => {
	const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Data Buku dengan id :${id} belum tersedia`)

	await BookData.findIdAndRemove(id)

	res.status(200).json({
		message: `Data buku dengan id ${id}, berhasil dihapus`
	})
}