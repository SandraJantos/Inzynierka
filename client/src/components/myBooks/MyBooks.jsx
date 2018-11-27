import React, { Component } from 'react';
import Form from 'components/common/form/Form';  
import sort from './../../utils/bookType';

class MyBooks extends Component {

	render() {
		const {formData,onChange,imageSelectedHandler,action,books} = this.props;
		const bookTypes = [
			"Przyrodnicze","Historyczne","Fantasy","Science-fiction","Horrory","Przygodowe","Komedie",
			"Tragedie","Kryminały","Detektywistyczne","Naukowe","Przygodowe","Młodzieżowe","Dramaty",
			"Sensacyjne","Biografie","Pamiętniki","Dzienniki"];
		
		return (
		<div>
			<Form
				formData={formData}  
				onChange={onChange}  
				schema={[
				{name:'tytuł', path:'title'}, 
				{name:'autor', path:'author'},
				{name:'opis', path:'description'},
				{name:'isbn', path:'isbn'},
				{name:'category',path:'category', type:'dropdown',options:
                [{value:'', label:''}].concat(bookTypes.map((c,index)=>({ value: index, label: c})))}
             
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
					<div>{`tytuł:${el.title}`}</div>
					<div>{`autor:${el.author}`}</div>
					<div>{`opis:${el.description}`}</div>
					<div>{`kategoria:${sort(el.category)}`}</div>

					<img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
				</div>
				) : null}
			</div>
		</div>
		);
	}
}  
 
 

export default MyBooks;
