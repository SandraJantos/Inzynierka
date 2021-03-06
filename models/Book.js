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
		type: Date,
		default: Date.now
	},
	reservationState: {
			type:String,
			default:'0'
	},
	hidden: {
		type: Boolean,
		default: false
	},
	reviews:  [
    {
      user: {
		// type: Schema.Types.ObjectId,
		// ref: 'users'
		type:String,
      },
      text: {
        type: String,
        required: true
      },
      rate: {
        type: String
      },
    }
  ],
  favourite :{
	type: Boolean,
	default: false
},
category:{
	type:Number
}
}); 

module.exports = Book = mongoose.model('books',BookSchema);

//0-free
//1-waiting
//2-reseved