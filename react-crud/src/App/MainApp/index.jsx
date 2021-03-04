import React, {useState, useEffect, Fragment} from 'react'
import { showData, detailData } from '../services/FetchData'
import {DataTables, DetailData, AddForm, EditForm} from '../components'
// import './index.css'


const MainApp = (props) => {

	// sample Data
	// const sampleData = [
	// 	{id:1, judul: "Tetralogy Buru", penulis: "Pramoedya Ananta Toer", genre: "Roman", penerbit: "Hasta Mitra"},
	// 	{id:1, judul: "Gadis Kretek", penulis: "Ratih Kumala", genre: "Fiksi", penerbit: "Balai Buku Progresive"}
	// ]

	const initialFormState = {id:null, judul:'', penulis: '', genre: '', penerbit: ''}

	// setting state
	const [books, setBooks] = useState([])
	const [details, setDetails] = useState(false)
	const [currentBook, setCurrentBook] = useState(initialFormState)
	const [editing, setEditing] = useState(false)

	useEffect(() => {

		showData()
		.then(res => {
			setBooks(res.data)
		})

	}, [books])

	const detailsBook = id => {
		console.log(id)
		// detailData(id)
		// .then( res => {
		// 	console.log(res)
		// })
	}


	// CRUD operation
	const addBook = book => {
		book.id = books.length + 1
		setBooks([...books, book])
	}

	const deleteBook = id => {
		setEditing(false)
		setBooks(books.filter(book => book.id !== id))
	}

	const updateBook = (id, updateBook) => {
		setEditing(false)
		setBooks(books.map(book => (book.id === id) ? updateBook : book ))
	}

	const editRow = book => {
		setEditing(true)
		setCurrentBook({
			id: book.id, 
			judul: book.judul,
			penulis: book.penulis,
			genre: book.genre,
			penerbit: book.penerbit
		})
	}

	return (
		<div className="container">
			<h1>{props.title}</h1>
			<div className="row">
				<div className="five columns">
				{editing ? (
					<Fragment>
						<h2>Edit Books</h2>
						<EditForm
							editing={editing}
							setEditing={setEditing}
							currentBook={currentBook}
							updateBook={updateBook}
						/>
					</Fragment>
				) : (
					<Fragment>
						<h2>Add Books</h2>
						<AddForm/>
					</Fragment>
				)}
				{ details ? (
					<Fragment>
						<h2>Detail Data</h2>
						<DetailData details={details}/>
					</Fragment>
				) : (

					<Fragment>
						<h2>No Data</h2>
					</Fragment>

				)}
				</div>

				<div className="five columns">
					<h2>View User</h2>

					<DataTables books={books} DetailData={DetailData} editRow={editRow} deleteBook={deleteBook}/>
				</div>
			</div>
		</div>
	)
}

export default MainApp
