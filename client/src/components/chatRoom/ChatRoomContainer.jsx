import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import { connect } from 'react-redux';
import chatAction from 'store/actions/chatAction';
import loginAction from 'store/actions/loginAction';
import channelAction from 'store/actions/channelAction';
import userAction from 'store/actions/userAction';
import io from 'socket.io-client';
import $ from 'jquery'; 
import { values } from 'lodash'

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

		} 
	};    

	createChannel = () => {
		this.props.createChannel(this.state.roomName);
		socket.emit('new channel', this.state.roomName);

	}
	logIn = () => {
		let userId=this.props.location.pathname.split('/')[1]
		let userName = this.props.users.find(el => el._id === userId)

		console.log(userName);
		let newMessage = {
			text:this.state.text,
			user:{id:userId,name:userName.name},
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
		socket.emit('USER_CONNECTED', this.props.user);

		this.props.getChannels()
		socket.on('receive socket', socketID =>
			this.props.receiveSocket(socketID)
			);
		socket.on('new channel', channel =>{
			console.log(channel);
			this.props.getChannels()
		} ); 
		socket.on('new message', message => {
			this.props.getMessages(this.props.activeChannel.id)

		})  
	socket.on('USER_CONNECTED', (users)=>{
			this.setState({ usersConnected: values(users) })
		})
		socket.on('USER_DISCONNECTED', (users)=>{
			this.setState({ usersConnected: values(users) })			
		})
	}

	changeChannel = (channel) => {
		socket.emit('leave channel', this.props.activeChannel);
		socket.emit('join channel', channel);
		this.setState(prevState => ({activeChannel:prevState.activeChannel===channel._id ? null : channel._id}))
		this.props.changeChannel(channel)
	 socket.emit('joinRoom', this.props.activeChannel.name, this.props.user._id);
		this.props.getMessages(channel._id)
			socket.on('getClients', message => {
			console.log(message);

		})  
	}
	render() {
		const {chatRooms,messages,channels} = this.props;
		console.log(this.state.usersConnected);
		return (
			<ChatRoom usersConnected={this.state.usersConnected} channels={channels} activeChannel={this.state.activeChannel} changeChannel={this.changeChannel}
			createChannel={this.createChannel} messages={this.props.messages} socket={socket} formData={this.state} chatRooms={chatRooms}
			onChange={v=>this.setState(v)} action={this.logIn} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomContainer);
