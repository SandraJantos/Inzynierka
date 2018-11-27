import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';
import Form from 'components/common/form/Form';  
import sort from './../../utils/bookType';


class Home extends Component { 
  render() { 
    const {openChat,currentUser,match,books,onChange,formData,users,...rest} = this.props; 
    books.slice(0).sort((a,b)=>new Date(a.created) - new Date(b.created));
    const bookTypes = [
      "Przyrodnicze","Historyczne","Fantasy","Science-fiction","Horrory","Przygodowe","Komedie",
      "Tragedie","Kryminały","Detektywistyczne","Naukowe","Przygodowe","Młodzieżowe","Dramaty",
      "Sensacyjne","Biografie","Pamiętniki","Dzienniki"];
    return (
    	<Fragment >
    	<div className="container">
        <Form
          formData={formData} 
          onChange={onChange}  
          schema={[
          {name:'zarezerwowane', path:'reservedBooks',type:'checkbox'}, 
          {name:'category',path:'category', type:'dropdown',options:
          [{value:'', label:''}].concat(bookTypes.map((c,index)=>({ value: index, label: c})))},
          {name:'szukaj', path:'searchByAttr'}, 

          ]} 
        />
    		{books.filter(
          e =>
           e.author
          .toLowerCase()
          .startsWith(formData.searchByAttr.toLowerCase())
          ||
          e.title
          .toLowerCase()
          .startsWith(formData.searchByAttr.toLowerCase())
          ).map(el => <div className="col-sm-4 block">
				  <img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
    			<div>TYYTUŁ:{el.title}</div>
          <div>{`AUTOR:${el.author}`}</div>
          <div>{`KATEGORIA:${sort(el.category)}`}</div>

    			<div>DATA:{moment(el.created).format('DD.MM.YYYY HH:mm')}</div>
          <div>UŻYTKOWNIK:{((users||[]).find(e => e._id === el.user)||{}).name}</div>
          <Link to={{pathname:`${match.path}book/${el.title}`,state:{ bookId: el._id }}}>Więcej</Link>
  
    			</div>)}
    		</div>
      </Fragment>
     );
  } 
} 


export default withRouter(Home); 