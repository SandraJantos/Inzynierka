import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FavoriteBooks from './FavoriteBooks';
import booksAction from 'store/actions/booksAction';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';



class FavoriteBooksContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {

		} 
	};    

	componentDidMount(){
		this.props.getBooksList();
	}

	render() { 
		const {match,books} = this.props; 
		return (
			<FavoriteBooks books={books} />
		);
	} 
}
 
function mapStateToProps (state) {
	return {

		books:state.books.filter(e => e.favourite===true)
	}
}


function mapDispatchToProps(dispatch) {
	return {
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteBooksContainer));
