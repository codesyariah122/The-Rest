import BookData from './model.js'
import mongoose from 'mongoose'

export const getAllData = async(req, res) => {
	try{
		const books = await BookData.find()
		res.status(200).json(books)
	}catch(error){
		res.status(404).json({
			message: error.message
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
		const books = BookData.find({"penulis": { $regex: `.*${penulis}.*`}}, function(err, data){
				res.status(200).json({
					data: data
				})
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
		const books = new BookData(bookdata)
		await books.save()
		res.status(201).json({
			data: books
		})
	}catch(error){
		res.status(409).json({
			message: error.message
		})
	}
}

export const updatedBooks = async(req, res) => {
	const id = req.params.id
	const {judul, penulis, genre, penerbit} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Buku dengan id : ${id}, data tidak ditemukan`)

	const books = {judul, penulis, genre, penerbit, id}

	await BookData.findByIdAndUpdate(id, books, {new: true})

	res.status(200).json(books)
}

export const deletedBooks = async(req, res) => {
	const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Buku dengan id : ${id}, data tidak ditemukan`)

	await BookData.findByIdAndRemove(id)
	res.status(200).json({
		message: "Deleted Bookdata successfully"
	})
}