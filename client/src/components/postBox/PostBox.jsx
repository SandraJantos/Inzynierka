import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Form from 'components/common/form/Form';  

class PostBox extends Component { 

	render() {
		const {sendMsg,formData,onChange} = this.props;
		return ( 
			<Fragment>
				<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
				{name:'', path:'text',type:'textarea'},

				]} 
				/>
				<button onClick={()=>{sendMsg()}}>Send message</button>
			</Fragment>
			);
	}
}


export default PostBox;
