import React, { Component } from 'react';
import Form from 'components/common/form/Form';  
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';


class ChatRoom extends Component {
	render() {
	const {formData,onChange,action,usersConnected,chatRooms,messages,createChannel,channels,changeChannel,activeChannel} = this.props;
		return (
		<div>
			<div className="col-md-4">
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'pokój', path:'roomName'}, 
				]} 
				/>
				<button onClick={()=>{createChannel()}}>Dodaj</button>
				{channels.map(el => <div style={activeChannel===el._id ? {fontWeight:'700'} : {}} 
				onClick={()=>{changeChannel(el)}}><span style={{cursor:'pointer'}}>{(el||{}).name}</span></div>)}
			</div>
			<div className="col-md-8">
			{(messages||[]).map(el => <div>{`${(el.user||{}).name} ${el.text}`}</div>)}
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'', path:'text'}, 
				]} 
				/>
				<button onClick={()=>{action()}}>wyślij</button>
			</div>
			{usersConnected.map(el => <div>{`${(el||{}).name} dołączył`}</div>)}
		</div>
		);
	} 
}
 
export default withRouter(ChatRoom);
