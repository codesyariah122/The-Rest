import React, {Fragment, useState, useEffect} from 'react'

const Modals = props => {
	useEffect(() => {
		setBook(props.currentBook)
	}, [props])

	const [book, setBook] = useState(props.currentBook)

	return (
		<div class="modal fade" id="modalData" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">{book.judul}</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
				  <div class="modal-body">
				       	<ul>
				       		<li>Penulis: {book.penulis}</li>
				       		<li>Genre : {book.genre}</li>
				       		<li>Penerbit : {book.penerbit}</li>
				       	</ul>
				      </div>

			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
	)
}

export default Modals