import React, { Component } from 'react';
import Form from 'components/common/form/Form';  

class LoginForm extends Component {

	render() { 
	const {t, formData, onChange, action,errors} = this.props;
	return (
		<div className="mt-30 mb-30 panel panel-default">
			<div className="outer"> 
					<Form
					formData={formData} 
					onChange={onChange}  
					schema={[
					{name:'email', path:'email', type:'email'}, 
					{name:'password', path:'password', type:'password'},
					]} 
				/>
				<div onClick={()=>onChange({email:'user1@user1.pl', password:'user1'})}>user1</div>
				<div onClick={()=>onChange({email:'user2@user2.pl', password:'user2'})}>user2</div>	
				<button onClick={()=>{action()}}> {'register'} </button>
			</div>
		</div> 
	);  	
	}
}

export default LoginForm;
