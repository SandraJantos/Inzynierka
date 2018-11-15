import React, { Component, Fragment } from 'react';
import MapContainer from 'components/map/MapContainer';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';


class Home extends Component { 
  render() { 
    const {openChat,currentUser,match,books,users,...rest} = this.props; 
   books.slice(0).sort((a,b)=>new Date(a.created) - new Date(b.created));
    return (
    	<Fragment >
    	<div className="container">
    		{books.map(el => <div className="col-sm-4 block">
				<img style={{width:'200px'}} src={`http://localhost:5000/api/books/${(el.image||{}).filename}`}  />
    			<div>TYYTUŁ:{el.title}</div>
    			<div>DATA:{moment(el.created).format('DD.MM.YYYY HH:mm')}</div>
          <div>UŻYTKOWNIK:{(users||[]).find(e => e._id === el.user).name}</div>

    			</div>)}
    		</div>
      		<MapContainer {...rest} />
    		}
      	</Fragment>
     );
  } 
}


export default withRouter(Home); 