import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';



class Book extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
		} 
	};    
	checkReservationState = (state) => {
		if (state === '0'){
			return <span>Free</span>
		}
		else if (state === '1'){
			return <span>Waiting</span>
		}
		else return <span>Reserved</span>
	}


	render() { 
		const {book,users,makeReservation,user,exchangeBook,ifBookReserved,reservations} = this.props; 
		console.log(Object.keys(reservations||{}),book);
	
		return (
			<div>
			<img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${((book||{}).image||{}).key}`}  />
			<div>TYYTUŁ:{book.title}</div>
			<div>DATA:{moment(book.created).format('DD.MM.YYYY HH:mm')}</div>
			<div>UŻYTKOWNIK:{((users||[]).find(e => e._id === book.user)||{}).name}</div>
			<div>Stan:{this.checkReservationState(book.reservationState)}</div>
			<div>
			{Object.keys(user||{}).length === 0 ? <div>Zaloguj się, aby zerezerwować książkę</div> : null}
             {Object.keys(reservations||{}).length > 0 && book.reservationState==='0' ? <div>
             	{`Czy chcesz wymienić tą książkę z ${users.find(e => e._id === reservations.first.createdBy).name}`}
             	<button onClick={()=>exchangeBook(reservations._id,book._id,reservations.first.createdBy)}>WYMIEŃ</button>
             </div> : (book.reservationState==='0' && book.user !== user.id 
             	?  <button onClick={()=>makeReservation(book.user,book._id)}>Rezerwuj</button> : null)}
             </div>
			</div>
 
		);
	}  
}
  


export default withRouter(Book);
