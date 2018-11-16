import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import moment from 'moment';



class Book extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
		} 
	};    



	render() { 
		const {book,users} = this.props; 
		return (
			<div>
			<img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(book.image||{}).key}`}  />
			<div>TYYTUŁ:{book.title}</div>
			<div>DATA:{moment(book.created).format('DD.MM.YYYY HH:mm')}</div>
			<div>UŻYTKOWNIK:{((users||[]).find(e => e._id === book.user)||{}).name}</div>
			</div>

		);
	} 
}
 


export default Book;
