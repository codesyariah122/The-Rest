import React, {useState, useEffect} from 'react'
import {GetBook, StoreBook, UpdateBook, DeleteBook} from '../../services'
import {ListBook, Modals, AddForm, EditForm} from '../../components'


const Home = props => {
	const [books, setBooks] = useState([])

	const [details, setDetails] = useState(false)
	
	const initialBook = { id: null, judul: "", penulis: "", genre: "", penerbit: ""}

	const [editing, setEditing] = useState(false)

	const [currentBook, setCurrentBook] = useState(initialBook)
	
	useEffect(() => {
		GetBook()
		.then(items => setBooks(items.data))
	}, [books])


	const addBook = (book) => {
		setBooks([...books, book])
		StoreBook(book)
	}

	const detailBook = (id, book) => {
		// console.log(id)
		setDetails(true)
		setCurrentBook(book)
	}


	const editBook = (id, book) => {
		setEditing(true)
		setCurrentBook(book)
	}

	const updateBook = (newBook) => {
		setBooks(
			books.map((book) => (book.id === currentBook.id ? newBook : book))
		)

		setCurrentBook(initialBook)
		setEditing(false)
		UpdateBook(newBook)
	}
	
	const deleteBook = (id) => {
		DeleteBook(id)
		.then(() => {
			const del = books.filter(book => book.id !== id)
			setBooks(del)
		})		
	}

	return (
		<div className="container">

			<div className="row justify-content-center">
				<div class="col-12 mt-3 mb-5">
					<h1 className="text-center">{props.header}</h1>
					<hr/>
				</div>
			</div>

			<div className="row justify-content-center">

				<div className="col-md-3">
				{editing ? (
					<>
					<h2>Edit Book</h2>
					<EditForm 
						currentBook={currentBook}
						setEditing={setEditing}
						updateBook={updateBook}
					/>
					</>
				) : (
					<>
					<h2>Add Book</h2>
					<AddForm addBook={addBook}/>
					</>
				)}
				</div>

				<div className="col-md-8">
					<h2>Lists Book</h2>
					<ListBook books={books} detailBook={detailBook} editBook={editBook} deleteBook={deleteBook}/>
				</div>

				{details ? (
					<Modals action="detail" details={details} currentBook={currentBook} />
				) : (
					''
				)}

			</div>
		</div>
	)
}

export default Home