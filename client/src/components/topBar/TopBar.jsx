import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class TopBar extends Component {

  componentDidMount(){
    if (this.props.token) {
      this.props.getCurrentUser();
    }
  } 

  render() {
  const {userName,currentUser,match} = this.props;
  return (
  <nav className="user-navbar navbar navbar-default">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="glyphicon glyphicon-menu-hamburger"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            {Object.keys((currentUser||{})).length > 0 ?
            <ul className="navLinks nav navbar-nav">
              <li>name: {(currentUser||{}).name}</li>
              <Link to={`/`}>HOME</Link>
              <Link to={`${match.path}myBooks`}>my books</Link>
              <Link to={`${match.path}chat`}>chat</Link>
              <Link to={`${match.path}planner`}>planner</Link>
              <Link to={`${match.path}map`}>map</Link>
                <li style={{cursor:'pointer'}} onClick={this.props.logout}>
                logOut
              </li> 
            </ul>
            :
            <ul className="nav navbar-nav button-holder">
              <Link to={`login`}>Login</Link>
              <Link to={`registration`}>Register</Link>
              <Link to={`map`}>map</Link>

            </ul>}
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
  }
}

export default withRouter(TopBar);
