import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import userAction from 'store/actions/userAction';
import loginAction from 'store/actions/loginAction';
import channelAction from 'store/actions/channelAction';
import booksAction from 'store/actions/booksAction';

import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';



class HomeContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			action:null,
			redirect:false,
		} 
	};    

	componentDidMount(){
		this.props.getUsersList();
		this.props.getBooksList();

	}



	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user && this.props.user!==null) {
			//socket.emit('connectedUser',(this.props.user.user||{}).id);

		}

	}
	openChat =() => {
		const initLobby = {
			name: "Lobby",
			id: 0,
			private: false
		};
		this.props.createChannel(initLobby);
	}
	render() { 
		const {users,match,books} = this.props; 
		return (
			<Fragment>
			<Home books={books} users={users} currentUser={this.props.user.user} openChat={this.openChat}
			 logout={this.props.logout}
				click={this.click} match={match} 
				  />
				</Fragment>
				);
	} 
}
 
function mapStateToProps (state) {
	return {
		token: state.token,
		user:state.user,
		users:state.users,
		registartionAction:state.registartionAction,
		books:state.books,

	}
}


function mapDispatchToProps(dispatch) {
	return {
		getCurrentUser: () => dispatch(userAction.getCurrentUser()),
		logout: () => dispatch(loginAction.logout()),
		getUsersList: () => dispatch(userAction.getUsersList()),
		createChannel: (a) => dispatch(channelAction.createChannel(a)),
		getBooksList: (r) => dispatch(booksAction.getBooksList(r)),



	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
