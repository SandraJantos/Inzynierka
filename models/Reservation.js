const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReservationSchema = new Schema({
	first:{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		bookId: {
			type: Schema.Types.ObjectId,
			ref: 'books'
		}
	},
	second:{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		bookId: {
			type: Schema.Types.ObjectId,
			ref: 'books'
		}
	},
	date:{
		type: Date,
		default: Date.now
	},
	reservationState: {
		type: String,
		default: '0'
	},
	

}); 
   
module.exports = Book = mongoose.model('reservation',ReservationSchema);