import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import loginAction from 'store/actions/loginAction';
import { withRouter } from 'react-router-dom'
import userAction from 'store/actions/userAction';

class TopBarContainer extends Component {

  componentDidMount(){
   this.props.getUsersList();
    this.props.getUsersList()
   
  } 

  render() {
    return (
      <TopBar user={this.props.users.find(e => e._id === this.props.user.id)} currentUser={this.props.user} 
      logout={()=>this.props.logout(this.props.history)}/>
    );
  }
} 

function mapStateToProps(state,ownProps) {
  return {
    user: state.user,
    users:state.users
  };
}

function mapDispatchToProps(dispatch){
  return {
    logout: (history)=>dispatch(loginAction.logout(history)),
    getUsersList: () => dispatch(userAction.getUsersList())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarContainer));
