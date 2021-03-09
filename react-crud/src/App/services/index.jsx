export const GetBook = async() => {
	const res = await fetch('http://localhost:8081/api/data/show')
	return res.json()
}

export const StoreBook = async(judul, penulis, genre, penerbit) => {
	return await fetch('http://localhost:8081/api/data/store', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			judul: judul,
			penulis: penulis,
			genre: genre,
			penerbit: penerbit
		})
	})
	.then( data => data.json())
}

export const UpdateBook = async(judul, penulis, genre, penerbit, id) => {
	try{
		return await fetch(`http://localhost:8081/api/data/updated/${id}`, {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				judul: judul,
				penulis: penulis,
				genre: genre,
				penerbit: penerbit
			})
		})
	}catch(err){
		console.log(err)
	}
}

export const DeleteBook = async(id) => {
	return await fetch(`http://localhost:8081/api/data/deleted/${id}`, {method: 'DELETE'})
}