import React, {Fragment} from 'react'

const ListBook = props => {
	const lists = props.books
	

	return (
		<div className="card">
		  <ul className="list-group list-group-flush">

		  {lists.map(list => (
		  	<Fragment>
		    	<li className="list-group-item">
			    	<div className="row mx-md-n5">
						<div className="col px-md-5">
					    	{list.judul}
					    </div>

					    <div className="col px-md-5">
					 	<a href="#" onClick={() => props.detailBook(list.id, list)} data-toggle="modal" data-target="#modalData">
					 		<span class="badge badge-pill badge-primary">Detail
					 		</span>
					 	</a>

					 	<a href="#" onClick={() => props.editBook(list.id, list)}>
					 		<span class="badge badge-pill badge-info ml-3">Edit
					 		</span>
					 	</a>

					 	<a href="#" onClick={() => props.deleteBook(list.id)}>
					 		<span class="badge badge-pill badge-danger ml-3">Delete
					 		</span>
					 	</a>
					 </div>

					</div>	
		    	</li>
		    
		    </Fragment>
		  ))}
	
		  </ul>
		</div>
	)
}

export default ListBook