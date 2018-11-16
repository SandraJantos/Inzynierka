import React, { Component } from 'react';
import MyBooks from './MyBooks';
import { connect } from 'react-redux';
import booksAction from 'store/actions/booksAction';
import loginAction from 'store/actions/loginAction';

class MyBooksContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title:'',
			author:'',
			description:'',
			isbn:'',
			image:''

		} 
	};     
	componentDidMount(){
		this.props.getBooksList();
		this.props.getCurrentUser();
	}
	imageSelectedHandler = (event) => {
		this.setState({image:event.target.files[0]})
	}
	createBook = () => {
		this.props.createBook(this.state, new Date())
	}
	sendImg = () => {
		this.props.addImage(this.state)

	}
	render() {
		const {books} = this.props;
		console.log(books);
		return (
			<MyBooks formData={this.state} sendImg={this.sendImg} books={books}
			onChange={v=>this.setState(v)} 
			action={this.createBook} imageSelectedHandler={this.imageSelectedHandler} />
			);
	} 
}

function mapStateToProps (state,ownProps) {
	console.log(ownProps);
	return {
		registartionAction:state.registartionAction,
		books:state.books.filter(e => e.user === state.user.id),
		book:state.book,
		user:state.user
	}
}


function mapDispatchToProps(dispatch) {
	return {
		createBook: (r,date) => dispatch(booksAction.createBook(r,date)),
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
		getCurrentUser: (r) => dispatch(loginAction.getCurrentUser(r)),
		addImage: (r) => dispatch(booksAction.addImage(r)),

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksContainer);

