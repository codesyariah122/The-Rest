export const showData = async() => {
	const data = await fetch('http://localhost:8081/api/data/show')
	return data.json()
}

export const detailData = async(id) => {
	const data = await fetch(`http://localhost:8081/api/data/show/id/${id}`)
	return data.json()
}