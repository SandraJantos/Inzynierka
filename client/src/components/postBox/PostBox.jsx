import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Form from 'components/common/form/Form';  

class PostBox extends Component { 

	render() {
		const {sendMsg,formData,onChange} = this.props;
		return ( 
			<div className="postForm">
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'', path:'text',type:'textarea'},

				]} 
				/>
				<button onClick={()=>{sendMsg()}}>Wyślij</button>
			</div>
			);
	}
}


export default PostBox;
