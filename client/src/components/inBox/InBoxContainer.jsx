import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InBox from './InBox';
import { withRouter } from 'react-router'
import postAction from 'store/actions/postAction';
import userAction from 'store/actions/userAction';

class InBoxContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
		} 
	};    
  componentDidMount(){
    this.props.getMessages();
	this.props.getUsersList();

  }

	render() {
		const {posts,users} = this.props;
		return ( 
			<InBox users={users} posts={posts} />
			);
	}
}
function mapStateToProps (state) {
	return {
		user: state.user,
		posts: state.posts.filter(e => e.recipient === state.user.id),
		users: state.users,

	}
}


function mapDispatchToProps(dispatch) {
	return {
		sendMessage: (sender,recipient,text) => dispatch(postAction.sendMessage(sender,recipient,text)),
		getMessages: () => dispatch(postAction.getMessages()),
		getUsersList: () => dispatch(userAction.getUsersList()),

	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InBoxContainer));
