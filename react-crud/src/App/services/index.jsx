export const GetBook = async() => {
	const res = await fetch('http://localhost:8081/api/data/show')
	return res.json()
}

export const StoreBook = async(book) => {
	return await fetch('http://localhost:8081/api/data/store', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			judul: book.judul,
			penulis: book.penulis,
			genre: book.genre,
			penerbit: book.penerbit
		})
	})
	.then( data => data.json())
}

export const UpdateBook = async(book) => {
	try{
		return await fetch(`http://localhost:8081/api/data/updated/${book.id}`, {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				judul: book.judul,
				penulis: book.penulis,
				genre: book.genre,
				penerbit: book.penerbit
			})
		})
		.then(data => data.json())
	}catch(err){
		console.log(err)
	}
}

export const DeleteBook = async(id) => {
	return await fetch(`http://localhost:8081/api/data/deleted/${id}`, {method: 'DELETE'})
}