import React, {Fragment, useState} from 'react'

const AddForm = props => {

	const initBook = {
		id: null, 
		judul: '',
		penulis: '',
		genre: '',
		penerbit: '' 
	}

	const [book, setBook] = useState(initBook)
	const [error, setError] = useState(false)

	const clearState = () => {
		setBook({...initBook})
	}

	const handleChange = e => {
		const {name, value} = e.target
		setBook({...book, [name]: value}, [])
	}

	const handleSubmit = e => {
		e.preventDefault()
		// console.log(book)
		if(book.judul == ''){
			setError(true)
		}else{
			setError(false)
			clearState()
			props.addBook(book)
			// free -hhandleChange(e, props.addBook(book))
		} 
	}

	return (
		<Fragment>
			<h4 className="text-success">{props.title}</h4>
			{error ? (
				<div className="alert alert-warning alert-dismissible fade show" role="alert">
				  <strong>Ooops!</strong> Terjadi error/Harap isi form input buku dengan benar.
				  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>
			) : (
				''
			)}
			<form>
			  <div className="form-group">
			    <label for="judul">Judul</label>
			    <input type="text" className="form-control" id="judul" value={book.judul} name="judul" onChange={handleChange}/>
			  </div>

			  <div className="form-group">
			    <label for="penulis">Penulis</label>
			    <input type="text" className="form-control" id="penulis" value={book.penulis} name="penulis" onChange={handleChange}/>
			  </div>

			  <div className="form-group">
			    <label for="genre">Genre</label>
			    <input type="text" className="form-control" id="genre" value={book.genre} name="genre" onChange={handleChange}/>
			  </div>

			  <div className="form-group">
			    <label for="penerbit">Penerbit</label>
			    <input type="text" className="form-control" id="penerbit" value={book.penerbit} name="penerbit" onChange={handleChange}/>
			  </div>
			
			  <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
			</form>
		</Fragment>
	)
}

export default AddForm