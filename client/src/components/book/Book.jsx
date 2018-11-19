import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Form from 'components/common/form/Form';  
import ModalContainer from 'components/common/modal/ModalContainer';  
import PostBoxContainer from 'components/postBox/PostBoxContainer';  



class Book extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
			rating:0,
			showPostModal:false
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
 	
 	showPostModal = () => {
 		 this.setState({
        showPostModal: true
      });
 	}
	render() { 
		const {addReview,formData, addToFavorites, onChange, book,users,makeReservation,user,exchangeBook,ifBookReserved,reservations} = this.props; 
		let owner = ((users||[]).find(e => e._id === book.user)||{}).name;
		return (
		<div>
			<div>
			Dodaj do ulubionych <i onClick={()=>addToFavorites(book._id,book.favourite)} style={book.favourite ? {'color':'rgb(255, 235, 59)'} : {'color':'rgb(203, 211, 227)'}} className="glyphicon glyphicon-star" />
			</div>
			{book.reviews.length> 0 ?
				<StarRatings
				rating={((book||[]).reviews.reduce((a,e) => (a + Number(e.rate)),0 ) / book.reviews.length)}
				starRatedColor='rgb(255, 235, 59)'
				numberOfStars={6}
				name='rating'
				starDimension='20px'
				/> : null}
				<img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${((book||{}).image||{}).key}`}  />
				<div>TYYTUŁ:{book.title}</div>
				<div>DATA:{moment(book.created).format('DD.MM.YYYY HH:mm')}</div>
				<div>UŻYTKOWNIK:owner</div>
				<div>Stan:{this.checkReservationState(book.reservationState)}</div>
				<div>
					{Object.keys(user||{}).length === 0 ? <div>Zaloguj się, aby zerezerwować książkę</div> : null}
					{Object.keys(reservations||{}).length > 0 && book.reservationState==='0' ? <div>
						{`Czy chcesz wymienić tą książkę z ${users.find(e => e._id === reservations.first.createdBy).name}`}
						<button onClick={()=>exchangeBook(reservations._id,book._id,reservations.first.createdBy)}>WYMIEŃ</button>
					</div> : (book.reservationState==='0' && book.user !== user.id 
					?  <button onClick={()=>makeReservation(book.user,book._id)}>Rezerwuj</button> : null)}
				</div>
				<div>OPINIE</div>
				{book.reviews.length> 0 ? book.reviews.map(e => <div>
					<div>{e.text}</div>
					<div>{e.user}</div>
					<StarRatings
					rating={Number(e.rate)}
					starRatedColor='rgb(255, 235, 59)'
					numberOfStars={6}
					starDimension='20px'
					/>
				</div> 
				) : null}
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
				{Object.keys(user||{}).length > 0 ? <div onClick={()=>{this.showPostModal()}}>{`Wyślij wiadomość do ${owner}`}</div> : null}
				{this.state.showPostModal===true ? <ModalContainer hide={()=>{this.setState({showPostModal:false})}}>
				<PostBoxContainer hide={()=>{this.setState({showPostModal:false})}} owner={book.user} />
				</ModalContainer> : null}
			</div>

		);
	}  
}
  


export default withRouter(Book);
