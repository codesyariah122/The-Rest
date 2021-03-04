import React, { useState, useEffect } from 'react'

const EditForm = props => {

	const [book, setBook] = useState(props.currentBook)

	useEffect(() => {
		// console.log(book)
		setBook(props.currentBook)
	}, [props])

	const handleInputChange = event => {
		const {name, value} = event.target
		setBook({...book, [name]: value})
		// console.log(book)
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.updateBook(book.id, book)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="judul">Judul</label>
			<input type="text" name="judul" id="judul" value={book.judul} onChange={handleInputChange}/>

			<label htmlFor="penulis">Penulis</label>
			<input type="text" name="penulis" id="penulis" value={book.penulis} onChange={handleInputChange}/>

			<label htmlFor="genre">Genre</label>
			<input type="text" name="genre" id="genre" value={book.genre} onChange={handleInputChange}/>

			<label htmlFor="penerbit">Penerbit</label>
			<input type="text" name="penerbit" id="penerbit" value={book.penerbit} onChange={handleInputChange}/>
			<button onClick={() => props.setEditing(false)} className="button muted-button">Edit Book</button>
		</form>

	)
}

export default EditForm