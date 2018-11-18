import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import booksAction from 'store/actions/booksAction';

class ProfileContainer extends Component {
  componentDidMount(){
    this.props.getBooksList();
  }
  render() {
  	const {books, ...rest} = this.props;
    return (
        <Profile books={books} {...rest}/>
    );
  } 
} 


function mapStateToProps (state,ownProps) {
	return {
    books: state.books.filter(e => e.user === ownProps.userId)
	}
}


function mapDispatchToProps(dispatch) {
	return {
	
    getBooksList: (r) => dispatch(booksAction.getBooksList(r)),


	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
     