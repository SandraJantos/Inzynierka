import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PostBox from './PostBox';
import { withRouter } from 'react-router'
import postAction from 'store/actions/postAction';

class PostBoxContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			text:''
		} 
	};    

	sendMsg = () => {
		this.props.sendMessage(this.props.user.id,this.props.owner,this.state.text);
	}

	render() {
		const {owner} = this.props;
		return ( 
			<PostBox sendMsg={this.sendMsg}
			formData={this.state} 
			onChange={v=>this.setState(v)} />
			);
	}
}
function mapStateToProps (state) {
	return {
		user: state.user
	}
}


function mapDispatchToProps(dispatch) {
	return {
		sendMessage: (sender,recipient,text) => dispatch(postAction.sendMessage(sender,recipient,text)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostBoxContainer));
