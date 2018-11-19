const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
	sender:{
		type:String,
		required:true
	},
	recipient:{
		type:String,
		required:true
	},
	date:{
		type: Date,
		default: Date.now
	},
	text:{
		type:String,
		required:true
	},
}); 
  
module.exports = User = mongoose.model('posts',PostSchema);