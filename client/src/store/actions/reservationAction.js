import axios from 'axios';
import {updateBookReservationStatus} from './booksAction';

export const RESERVATIONS_RECEIVED = 'RESERVATIONS_RECEIVED';

export const reservationsReceivedAction = (reservations) => {
	return {
		type: RESERVATIONS_RECEIVED,
		reservations
	};
}

export const getReservations = () => dispatch => {
  axios.get('/api/reservations/reservationsList/')
  .then(e => dispatch(reservationsReceivedAction(e.data)))
  .catch(err => console.log(err))
}


export const makeReservation = (r,state) => dispatch => {
	console.log(r);
	axios.post('/api/reservations/newReservation/',r)
	.then(e => dispatch(updateBookReservationStatus(e.data.first.bookId,state)))
	.catch(err => console.log(err))
}
export const updateReservation = (r,id,state) => dispatch => {
	axios.post('/api/reservations/'+id+'/',r)
	.then(e => dispatch(updateBookReservationStatus(e.data.second.bookId,state)))
	.catch(err => console.log(err))
}
export default {
	makeReservation,
	getReservations,
	updateReservation
}
