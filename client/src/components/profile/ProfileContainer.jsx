import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import booksAction from 'store/actions/booksAction';
import userAction from 'store/actions/userAction';

class ProfileContainer extends Component {
    constructor (props) {
    super(props)
    this.state = {
      reservedBooks:null
    } 
  };   
  componentDidMount(){
    this.props.getBooksList();
    this.props.getUsersList();

  }

  filter = (books) => {
    if (this.state.reservedBooks===true) {
      return this.props.books.filter(e => e.reservationState!=='0')
    }
    else{
      return this.props.books.filter(e => e.reservationState==='0')
    }

  }
  render() {
  	const {books,user,owner, ...rest} = this.props;
    return (
        <Profile user={user} owner={owner} formData={this.state} onChange={v=>this.setState(v)}  books={this.filter(books)} {...rest}/>
    );
  } 
} 


function mapStateToProps (state,ownProps) {
	return {
    books: state.books.filter(e => e.user === ownProps.userId),
    owner: state.users.find(e=>e._id === ownProps.userId),
    user: state.user
	}
}


function mapDispatchToProps(dispatch) {
	return {
	
    getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
    getUsersList: () => dispatch(userAction.getUsersList()),


	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
     