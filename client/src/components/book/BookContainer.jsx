import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import booksAction from 'store/actions/booksAction';
import userAction from 'store/actions/userAction';
import loginAction from 'store/actions/loginAction';
import reservationAction from 'store/actions/reservationAction';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

class BookContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
			text:'',
			userName:'',
			category:''
		} 
	};    

	componentDidMount(){
		this.props.getBooksList(); 
   		this.props.getReservations();
		if (this.props.user) {
			this.setState({userName:this.props.user.name});
		}
	}
	makeReservation = (ownerId, bookId, bookState) => {
		let reservationsObj = {
			date:new Date(),
			book:bookId,
			reservationState:'1'
		}
			Object.assign(reservationsObj, {
				first: {
				createdBy: this.props.user.id,
				owner:ownerId,
				bookId
			}}) 
		this.props.makeReservation(reservationsObj,'1')
		}

	exchangeBook = (reservationId, bookId,ownerId) => {
		let reservationsObj = {
			second: {
				createdBy: this.props.user.id,
				owner:ownerId,
				bookId
			}
		}
	this.props.updateReservation(reservationsObj,reservationId,'2')
	}

	addReview = (bookId, rate) => {
		this.props.addReview(bookId,rate.toString(),this.state.text, this.state.userName);
	}

	addToFavorites = (bookId, favourite) => {
		this.props.addToFavorites(bookId,!favourite);
	}
	render() { 
		const {book,users,user,reservations} = this.props; 
		console.log(reservations);
		return (
			<Book addToFavorites={this.addToFavorites} addReview={this.addReview} exchangeBook={this.exchangeBook} 
			user={user} book={book} reservations={reservations}
			formData={this.state} onChange={v=>this.setState(v)} 
			makeReservation={this.makeReservation} users={users} />
		);
	} 
}
 
function mapStateToProps (state,ownProps) {
	console.log(ownProps);
	return {
		book:(state.books||[]).find(e => e._id === ownProps.bookId),
		users:state.users,
		user:state.user,
		reservations:(state.reservations||[]).find(e => e._id === ownProps.reservationId)

	}
}
 

function mapDispatchToProps(dispatch) {
	return {
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
		getUsersList: () => dispatch(userAction.getUsersList()),
		reserveBook: (id,state,userId,date) => dispatch(booksAction.reserveBook(id,state,userId,date)),
		getCurrentUser: () => dispatch(loginAction.getCurrentUser()),
		getReservations: () => dispatch(reservationAction.getReservations()),
		makeReservation: (reservationsObj,bookState) => dispatch(reservationAction.makeReservation(reservationsObj,bookState)),
		updateReservation: (reservationsObj,reservationId,bookState) => dispatch(reservationAction.updateReservation(reservationsObj,reservationId,bookState)),
		addReview: (bookId,rate,text,user) => dispatch(booksAction.addReview(bookId,rate,text,user)),
		addToFavorites: (bookId,favourite) => dispatch(booksAction.addToFavorites(bookId,favourite)),



	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookContainer));
