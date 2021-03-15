import React, {Fragment, useState, useEffect} from 'react'

const EditForm = props => {
	useEffect(() => {
		setBook(props.currentBook)
	}, [])
	const [book, setBook] = useState(props.currentBook)

	const handleChange = e => {
		const {name, value} = e.target
		setBook({...book, [name]: value})
	}

	const handleSubmit = e => {
		// console.log(book)
		e.preventDefault()
		if(book.judul && book.penulis && book.genre && book.penerbit) props.updateBook(book)
	}
	return (
		<Fragment>
			<h4 className="text-info">{props.title}</h4>
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
		

		  <button type="submit" className="btn btn-success mr-3" onClick={handleSubmit}>submit</button>

		  <button type="submit" className="btn btn-warning" onClick={() => props.setEditing(false)}>cancel</button>
		</form>
		</Fragment>
	)
}

export default EditForm