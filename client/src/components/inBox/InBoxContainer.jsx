import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InBox from './InBox';
import { withRouter } from 'react-router'
import postAction from 'store/actions/postAction';

class InBoxContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
		} 
	};    
  componentDidMount(){
    this.props.getMessages();
  }
	render() {
		const {posts} = this.props;
		return ( 
			<InBox posts={posts} />
			);
	}
}
function mapStateToProps (state) {
	return {
		user: state.user,
		posts: state.posts.filter(e => e.recipient === state.user.id)
	}
}


function mapDispatchToProps(dispatch) {
	return {
		sendMessage: (sender,recipient,text) => dispatch(postAction.sendMessage(sender,recipient,text)),
		getMessages: () => dispatch(postAction.getMessages()),

	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InBoxContainer));
