const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	title:{
		type:String,
	},
	author:{
		type:String,
	}, 
	description:{
		type:String,
	},
	isbn:{
		type:String,
	},
	image:{
		type:Object,
	},
	state:{
		type:String,
    	default: 'unread'
	},
	created:{
		type: Date 
	}
}); 
  
module.exports = Book = mongoose.model('books',BookSchema);