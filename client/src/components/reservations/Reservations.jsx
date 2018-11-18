import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Reservations extends Component {
	constructor (props) {
		super(props)
		this.state = {


		} 
	};     

	render() {
		const {books,users,redirectToProfile,reservationsWaiting1,reservationsWaiting2,reservationsInProgress1,reservationsInProgress2} = this.props;
		let reservationMadyByUser;
		return (
			<div>
				{reservationsWaiting1.length>0 ? reservationsWaiting1.map(el => {
				let book = (books.find(e => e._id === el.first.bookId)||{})
				let createdBy = (users.find(e => e._id === el.first.createdBy)||{})
				return <div>
				<div>{`Twoja książka pt. ${book.title}
				została zarezerwowana przez użytkownika ${createdBy.name}`}</div>
				Zobacz profil użytkownika, aby dokonać wymiany: <button onClick={()=>redirectToProfile(createdBy.name,createdBy._id,el._id)}>profil</button>
				</div>
				}
				) : null}
				{reservationsWaiting2.length>0 ? reservationsWaiting2.map(el => {
				let book = (books.find(e => e._id === el.first.bookId)||{})
				let borrowedFrom = (users.find(e => e._id === el.first.owner)||{})
				return <div>
				<div>{`Pożyczyleś książkę pt. ${book.title}
				od użytkownika ${borrowedFrom.name}`}</div>
				Czekaj aż wybierze książkę z Twjej oferty.
				</div>
				}
				) : null}
				{reservationsInProgress1.length > 0 ? reservationsInProgress1.map(el => {
				let book = (books.find(e => e._id === el.first.bookId)||{})
				let createdBy = (users.find(e => e._id === el.first.createdBy)||{})
				let reservedBook = (books.find(e => e._id === el.second.bookId)||{})
				return	<div> {`Twoja książka pt. ${book.title}
				została zarezerwowana przez użytkownika ${createdBy.name}
				Ty zarezerwowałeś u niego książkę pt. ${reservedBook.title}.`}</div>})
				 : null}
				 {reservationsInProgress2.length > 0 ? reservationsInProgress2.map(el => {
				let book = (books.find(e => e._id === el.second.bookId)||{})
				let createdBy = (users.find(e => e._id === el.second.createdBy)||{})
				let reservedBook = (books.find(e => e._id === el.first.bookId)||{})
				return	<div> {`Twoja książka pt. ${book.title}
				została zarezerwowana przez użytkownika ${createdBy.name}
				Ty zarezerwowałeś u niego książkę pt. ${reservedBook.title}. `}</div>})
				 : null}
			</div>
			);
	}  
}


export default (Reservations);

