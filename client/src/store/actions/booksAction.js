import axios from 'axios';
import errorAction from './errorAction';
export const BOOK_RECEIVED = 'BOOK_RECEIVED';
export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';

export const booksReceivedAction = (books) => {
  console.log(books);  
  return {
    type: BOOKS_RECEIVED,
    books
  };
}

export const bookReceivedAction = (book) => {
  return {
    type: BOOK_RECEIVED,
    book
  }; 
}
export const createBook = (r,date,user) => dispatch => {
  console.log(r);
  let formData = new FormData();
  formData.append('title', r.title);
  formData.append('author', r.author);
  formData.append('description', r.description);
  formData.append('isbn', r.isbn);
  formData.append('image', r.image);
  formData.append('created', date);
  formData.append('user', user);

  axios.post('/api/books/', formData, 'multipart/form-data')
  .then(() => dispatch(getBooksList()))
  .catch(err => dispatch(errorAction(err.response.data)))
}

export const getBooksList = () => dispatch => {
  axios.get('/api/books/')
  .then(e => dispatch(booksReceivedAction(e.data)))
  .catch(err => console.log(err))
}

export const updateBookStatus = (id,state) => dispatch => {
  axios.post('/api/books/'+id,{state})
  .then(e => dispatch(getBooksList()))
  .catch(err => console.log(err))
}
export const updateBookReservationStatus = (id,state) => dispatch => {
  axios.post('/api/books/reserved/'+id,{reservationState:state})
  .then(e => dispatch(getBooksList()))
  .catch(err => console.log(err))
}

export const addReview = (id,rate,text, user) => dispatch => {
  console.log(id,rate,text, user);
  axios.post('/api/books/review/'+id,{rate,text,user})
  .then(e => dispatch(getBook(id)))
  .catch(err => console.log(err))
}

export const getBook = (id) => dispatch => {
  axios.get('/api/books/'+id+'/')
  .then(e => dispatch(bookReceivedAction(e.data)))
  .catch(err => console.log(err))
}
export const reserveBook = (id,state, userId,date) => dispatch => {
  axios.post('/api/books/reservationAction/'+id+'/',{'state': state, 'reservedBy':userId,date})
  .then(e => dispatch(getBooksList()))
  .catch(err => console.log(err))
}
export default {
  createBook,
  getBooksList,
  updateBookStatus,
  reserveBook,
  updateBookReservationStatus,
  addReview
}    