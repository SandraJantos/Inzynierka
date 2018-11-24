import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';
import Form from 'components/common/form/Form';  


class FavoriteBooks extends Component { 
  render() { 
    const {books} = this.props; 

    return (
    	<Fragment >
        {books.map(el => <div>
          <div>{`tytuł:${el.title}`}</div>
          <div>{`opis:${el.description}`}</div>
          <img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
          </div>)}
      </Fragment>
     );
  } 
} 


export default withRouter(FavoriteBooks); 