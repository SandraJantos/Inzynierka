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
		} 
	};    

	componentDidMount(){
		this.props.getBooksList(); 
   		this.props.getCurrentUser();
   		this.props.getReservations();

	}
	makeReservation = (ownerId, bookId, bookState) => {
		console.log(this.props.user.id,ownerId);
		//this.props.reserveBook(bookId,'1',this.props.user.id,new Date());
		let reservationsObj = {
			date:new Date(),
			book:bookId,
			reservationState:'1'
		}
		// if ((this.props.reservations||[]).filter(e => (e.first||{}).createdBy ===ownerId)
		// 	.filter(e => (e.first||{}).owner === this.props.user.id).length === 0) {
			console.log((this.props.reservations||[]).filter(e => (e.first||{}).createdBy ===this.props.user.id));
			Object.assign(reservationsObj, {
				first: {
				createdBy: this.props.user.id,
				owner:ownerId,
				bookId
			}}) 
		this.props.makeReservation(reservationsObj,'1')
		}
		// else{
		// 	Object.assign(reservationsObj, {
		// 		second: {
		// 		createdBy: this.props.user.id,
		// 		owner:ownerId,
		// 		bookId
		// 	}})
		// this.props.updateReservation(reservationsObj,
		// 	(this.props.reservations||[]).find(e => (e.first||{}).createdBy === ownerId && (e.first||{}).owner === this.props.user.id)._id,'1')

		// }
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
	render() { 
		const {book,users,user,reservations} = this.props; 
		console.log(reservations);
		return (
			<Book exchangeBook={this.exchangeBook} user={user} book={book} reservations={reservations}
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


	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookContainer));
