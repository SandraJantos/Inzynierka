import React, { Component, Fragment } from 'react';
import ChatRoom from './ChatRoom';
import { connect } from 'react-redux';
import chatAction from 'store/actions/chatAction';
import loginAction from 'store/actions/loginAction';
import channelAction from 'store/actions/channelAction';
import userAction from 'store/actions/userAction';
import io from 'socket.io-client';
import $ from 'jquery'; 
import { values } from 'lodash'
import { withRouter } from 'react-router';

const socket = io('', { path: '/api/chat' });

class ChatRoomContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			roomName:'',
			text:'',
			messages:[],
			activeChannel:null,
			usersConnected:[],
			exit:false,
			joined:false
		} 
	};    

	createChannel = () => {
		this.props.createChannel(this.state.roomName);
		socket.emit('new channel', this.state.roomName);

	}
	sendMsg = () => {
		const {user} = this.props;
		let newMessage = {
			text:this.state.text,
			user:{id:user.id,name:user.name},
			channelID:this.props.activeChannel.id,
			time: new Date()
		}
		socket.emit('send message',newMessage);

		this.props.sendMsg(newMessage)
		this.props.getMessages(this.props.activeChannel.id)

	}
	componentDidMount() {
		this.props.getChannels();
		this.props.getUsersList();
		if ((this.props.user||{}).isAuthenticated === true) {
			this.props.getCurrentUser();
		}
		socket.emit('chat mounted', this.props.user);

		this.props.getChannels()

		socket.on('receive socket', socketID =>
			this.props.receiveSocket(socketID)
		);
		socket.on('new channel', channel =>{
			this.props.getChannels()
		} ); 

		socket.on('new message', message => {
			this.props.getMessages(this.props.activeChannel.id)
		})  

		socket.on('usersConnected', (users)=>{
			this.setState({ usersConnected: users })
		})

		socket.on('usersDisconnected', (users)=>{
			this.setState({ usersConnected: users })
		})
	}
	// componentDidUpdate(prevState) {
	// 	if (prevState.usersConnected !== this.state.usersConnected && this.state.exit==-true
	// 		&& this.state.usersConnected.filter(e => e.id === this.props.user.id).length===0) {
	// 			this.props.history.push('/');


	// 	}
	// }
	changeChannel = (channel) => {
		socket.emit('leave channel', this.props.activeChannel);
		this.setState(prevState => ({activeChannel:prevState.activeChannel===channel._id ? null : channel._id}))
		this.props.changeChannel(channel)
		this.props.getMessages(channel._id)
		socket.on('getClients', message => {
			console.log(message);

		})  
	}

	leaveChat = () => {
		console.log("fsdfs");
		socket.emit('leaveRoom', this.props.user);
		this.setState({joined:false})

	}
		joinChat = () => {
		socket.emit('joinRoom', this.props.user);
		this.setState({joined:true})

	}
	render() {
		const {chatRooms,messages,channels} = this.props;
		console.log(this.state.usersConnected);
		return (
			<Fragment>
			{this.state.joined ? <Fragment>
			<ChatRoom usersConnected={this.state.usersConnected} channels={channels} activeChannel={this.state.activeChannel} changeChannel={this.changeChannel}
			createChannel={this.createChannel} messages={this.props.messages} socket={socket} formData={this.state} chatRooms={chatRooms}
			onChange={v=>this.setState(v)} action={this.sendMsg} />
			<button onClick={this.leaveChat}>WYJDŹ</button>
			</Fragment> : 	<button onClick={this.joinChat}>Wejdź</button>}
			</Fragment>
			);
	} 
}
function mapStateToProps (state,ownProps) {
	return {
		chatRooms:state.chatRooms.data,
		message:state.message,
		messages:state.messages,
		user:state.user,
		channels:state.channels,
		activeChannel:state.activeChannel,
		users:state.users,
	}
}


function mapDispatchToProps(dispatch) {
	return {
		createChannel: (roomName) => dispatch(channelAction.createChannel(roomName)),
		getChatRoomsList: () => dispatch(chatAction.getChatRoomsList()),
		sendMsg: (newMessage) => dispatch(chatAction.sendMsg(newMessage)),
		getMessage: (message) => dispatch(chatAction.getMessage(message)),
		receiveSocket:(socketID) => dispatch(chatAction.receiveSocket(socketID)),
		getCurrentUser: ()=>dispatch(loginAction.getCurrentUser()),
		getChannels: ()=>dispatch(channelAction.getChannels()),
		changeChannel: (channel)=>dispatch(channelAction.changeChannel(channel)),
		getMessages: (channelID) => dispatch(chatAction.getMessages(channelID)),
		getUsersList: () => dispatch(userAction.getUsersList()),
	} 
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoomContainer));
