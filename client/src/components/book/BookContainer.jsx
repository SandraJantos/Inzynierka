import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import booksAction from 'store/actions/booksAction';
import userAction from 'store/actions/userAction';

import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';



class BookContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
		} 
	};    

	componentDidMount(){
		this.props.getBooksList();
		this.props.getBooksList();

	}

	render() { 
		const {book,users} = this.props; 
		return (
			<Book book={book} users={users} />
		);
	} 
}
 
function mapStateToProps (state,ownProps) {
	return {
		book:state.books.find(e => e._id === ownProps.bookId),
		users:state.users

	}
}


function mapDispatchToProps(dispatch) {
	return {
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
		getUsersList: () => dispatch(userAction.getUsersList()),


	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookContainer));
