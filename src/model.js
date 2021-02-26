// export const AllData = () => {
// 	const DataSample = [
// 		{id: 1, judul: 'Bumi Manusia', genre: 'Roman', penulis: 'Pramoedya Ananta Toer', penerbit: 'Hasta Mitra'},
// 		{id: 2, judul: 'Tenggelamnya Kapal Van Der Wicjk', genre: 'Roman', penulis: 'Hamka', penerbit: 'Laskar Pustaka'}
// 	]

// 	return DataSample
// }

// export const DataById = (id) => {
// 	const row = AllData().find(d => d.id == id)
// 	return (!row) ? [{message: `product with id : ${id} data not found`}] : row
// }

// export const DataByPenulis = (penulis) => {
// 	const row = AllData().find(d => d.penulis == penulis)
// 	return (!row) ? [{message: `Buku dengan penulis : ${penulis} belum ada data`}] : row
// }

import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
	judul: String,
	penulis: String,
	genre: String,
	penerbit: String
})

bookSchema.method('toJSON', function(){
	const {__v, _id, ...object} = this.toObject()
	object.id = _id
	return object
})

const BookData = mongoose.model('products', bookSchema)

export default BookData