import React, { Component } from 'react';
import Planner from './Planner';
import { connect } from 'react-redux';
import booksAction from 'store/actions/booksAction';


class PlannerContainer extends Component {
		constructor (props) {
		super(props)
		this.state = {
			chatMsg:'',
			msgBy:''
		} 
	};    
	componentDidMount(){
		this.props.getBooksList();
	}
	  changed = (id,status) => {
	 this.props.updateBookStatus(id,status)
  }
  render() {
  	const {books} = this.props;
    return (
        <Planner changed={this.changed} books={books}/>
    );
  } 
}
function mapStateToProps (state,ownProps) {
	return {
		books:state.books.filter(e => e.user === (ownProps.location.pathname.split('/')[1])),

	}
}


function mapDispatchToProps(dispatch) {
	return {
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),
		updateBookStatus: (id,status) => dispatch(booksAction.updateBookStatus(id,status)),
	
	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(PlannerContainer);
     