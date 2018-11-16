import React, { Component } from 'react';
import Form from 'components/common/form/Form';  


class MyBooks extends Component {


	render() {
		const {formData,onChange,imageSelectedHandler,action,books} = this.props;
		console.log(books);
		return (
			<div>
			<Form
				formData={formData} 
				onChange={onChange}  
				schema={[
					{name:'title', path:'title'}, 
					{name:'author', path:'author'},
					{name:'description', path:'description'},
					{name:'isbn', path:'isbn'},

					]} 
					/>
				<div className="imgUploadContainer">
				<span>uploadImage</span>
					<label htmlFor="file-upload" className="custom-file-upload">
						<input id="file-upload" type="file" name="image" onChange={imageSelectedHandler} />
					</label>
				</div>
				<button onClick={action}>create</button>
					<div>
					{books ? books.map(el => <div>
						<div>title:{el.title}</div>
						<div>description:{el.description}</div>

					
						</div>
						) : null}
					</div>
				</div>
			);
	}
}



export default MyBooks;
