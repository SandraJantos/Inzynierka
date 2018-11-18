import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Profile extends Component {
  render() {
    const {books,match,reservationId} = this.props;

    return (
      <div>
      {books.length>0 ? books.map(el => <div>
        <div>title:{el.title}</div>
        <div>description:{el.description}</div>
        <img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
        <Link to={{pathname:`/book/${el.title}`,state:{ bookId: el._id,reservationId }}}>Więcej</Link>
       
        </div>
        ) : null}
      </div>
      );
  } 
}
 
export default withRouter(Profile);
 