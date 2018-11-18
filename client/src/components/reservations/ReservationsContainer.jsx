import React, { Component } from 'react';
import Reservations from './Reservations';
import { connect } from 'react-redux';
import booksAction from 'store/actions/booksAction';
import loginAction from 'store/actions/loginAction';
import userAction from 'store/actions/userAction';
import { withRouter } from 'react-router';
import reservationAction from 'store/actions/reservationAction';

class ReservationsContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {


		} 
	};     
	componentDidMount(){
		this.props.getBooksList();
		this.props.getCurrentUser(); 
		this.props.getUsersList();
   		this.props.getReservations();

	}
	redirectToProfile = (user,userId, reservationId) => {
		this.props.history.push( {pathname: `profile/${user}`,
			state: { id: userId,reservationId }});

	}
	render() {
		const {books,users,reservations,user} = this.props;
		console.log(user.id);
		return (
			<Reservations books={books} redirectToProfile={this.redirectToProfile} 
			reservationsWaiting1={(((reservations||[]).filter(e => (e.first||{}).owner===user.id))||[]).filter(e => Object.keys(e).indexOf('second')===-1)} users={users}
			reservationsWaiting2={(((reservations||[]).filter(e => (e.first||{}).createdBy===user.id))||[]).filter(e => Object.keys(e).indexOf('second')===-1)} 
	
			reservationsInProgress1={(((reservations||[]).filter(e => (e.first||{}).owner===user.id))||[]).filter(e => Object.keys(e).indexOf('second') >-1)} 
			reservationsInProgress2={(((reservations||[]).filter(e => (e.second||{}).owner===user.id))||[]).filter(e => Object.keys(e).indexOf('second') >-1)}  /> 
			);
	} 
}

function mapStateToProps (state,ownProps) {
	return { 
		books:state.books,
		users: state.users,
		reservations:state.reservations,
		user:state.user
	}
}


function mapDispatchToProps(dispatch) {
	return {
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
		getCurrentUser: (r) => dispatch(loginAction.getCurrentUser(r)),
		getUsersList: () => dispatch(userAction.getUsersList()),
		getReservations: () => dispatch(reservationAction.getReservations()),

	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer));

