import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Form from 'components/common/form/Form';  

class Profile extends Component {
  render() {
    const {books,match,reservationId,formData,onChange} = this.props;

    return (
      <div>
      <Form
        formData={formData} 
        onChange={onChange}  
        schema={[
        {name:'waszystkie', path:'reservedBooks',type:'checkbox'}, 
        ]} 
      /> 
      {books.length>0 ? books.map(el => <div>
        <div>title:{el.title}</div>
        <div>description:{el.description}</div>
        <img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
        <Link to={{pathname:`/book/${el.title}`,state:{ bookId: el._id,reservationId }}}>Więcej</Link>
        <div>state:{el.reservationState==='0' ? <span style={{color:'green'}}>FREE!</span> : null}</div>
        </div>
        ) : null}
      </div>
      );
  } 
}
 
export default withRouter(Profile);
 