import React, { useState, useEffect } from 'react'

const DetailData = props => {
	const [book, setBook] = useState(props.currentBook)

	useEffect(() => {
		// console.log(book)
		setBook(props.currentBook)
	}, [props])

	return (

		<ul>
			<li>{book.penulis}</li>
			<li>{book.genre}</li>
			<li>{book.penerbit}</li>
		</ul>
	)
}

export default DetailData