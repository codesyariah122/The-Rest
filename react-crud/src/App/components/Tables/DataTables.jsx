import React from 'react'

const DataTables = props => {
	let no = 0
	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Judul</th>
					<th>Penulis</th>
					<th>Genre</th>
					<th>Penerbit</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>

				{props.books.length > 0 ? (
					props.books.map(book => (
						<tr>
							<td>{no += 1}</td>
							<td>{book.judul}</td>
							<td colSpan={4}>

								<button onClick={ () => props.detailBook(book)} className="buton muted-button">Detail</button>
								<button onClick={() => props.editRow(book)} className="button muted-button">Edit</button>

								<button className="button muted-button">Delete</button>
							</td>
						</tr>
					))
				): (

					<tr>
						<td colSpan={3}>No data found</td>
					</tr>
				)}

			</tbody>
		</table>
	)
}

export default DataTables