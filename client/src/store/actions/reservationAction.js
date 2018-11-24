import axios from 'axios';
import {updateBookReservationStatus} from './booksAction';
import {getUsersList} from './userAction';

export const RESERVATIONS_RECEIVED = 'RESERVATIONS_RECEIVED';
export const RESERVATIONS_CONFIRMED = 'RESERVATIONS_CONFIRMED';

export const reservationsReceivedAction = (reservations) => {
	return {
		type: RESERVATIONS_RECEIVED,
		reservations
	};
}

export const reservationConfirmedAction = (reservationConfirmed) => {
	console.log(reservationConfirmed);
	return {
		type: RESERVATIONS_CONFIRMED,
		reservationConfirmed
	};
}

export const getReservations = () => dispatch => {
  axios.get('/api/reservations/reservationsList/')
  .then(e => dispatch(reservationsReceivedAction(e.data)))
  .catch(err => console.log(err))
}

export const addPoints = (id) => dispatch => {
  axios.post('/api/users/addPoints/'+id)
  .then(e => dispatch(getUsersList()))
  .catch(err => console.log(err))
}
export const makeReservation = (r,state) => dispatch => {
	axios.post('/api/reservations/newReservation/',r)
	.then(e => dispatch(updateBookReservationStatus(e.data.first.bookId,state)))
	.catch(err => console.log(err))
}
export const updateReservation = (r,id,state) => dispatch => {
	axios.post('/api/reservations/'+id+'/',r)
	.then(e => dispatch(updateBookReservationStatus(e.data.second.bookId,state)))
	.catch(err => console.log(err))
}

export const confirmExchange = (id,key) => dispatch => {
	axios.post('/api/reservations/confirmExchange/'+id+'/',{exchanged:key})
	.then(e=>dispatch(reservationConfirmedAction(e.data)))
	.then(e => dispatch(getReservations()))
	.catch(err => console.log(err))
}
export default {
	makeReservation,
	getReservations,
	updateReservation,
	confirmExchange,
	addPoints
}
 