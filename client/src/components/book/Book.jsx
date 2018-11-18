import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Form from 'components/common/form/Form';  



class Book extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
			rating:0
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

  changeRating = ( newRating, name ) => {
      this.setState({
        rating: newRating
      });
    }
 
	render() { 
		const {addReview,formData, onChange, book,users,makeReservation,user,exchangeBook,ifBookReserved,reservations} = this.props; 
		console.log(this.state.rating);
	
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
			<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'text', path:'text',type:'textarea'},
				{name:'text', path:'userName'},

				]} 
			/>
			<StarRatings
				rating={this.state.rating}
				starRatedColor='rgb(255, 235, 59)'
				changeRating={this.changeRating}
				numberOfStars={6}
				name='rating'
				starDimension='20px'
				starHoverColor='rgb(255, 235, 59)'
			/>
			<button onClick={()=>{addReview(book._id,this.state.rating)}}>dodaj</button>
			</div>

		);
	}  
}
  


export default withRouter(Book);