import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import loginAction from 'store/actions/loginAction';
import { withRouter } from 'react-router-dom'
import userAction from 'store/actions/userAction';

class TopBarContainer extends Component {

  componentDidMount(){
   this.props.getUsersList();
  } 

  render() {
    return (
      <TopBar currentUser={this.props.user} 
      logout={()=>this.props.logout(this.props.history)}/>
    );
  }
} 

function mapStateToProps(state,ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return {
    logout: (history)=>dispatch(loginAction.logout(history)),
    getCurrentUser: (id)=>dispatch(loginAction.getCurrentUser(id)),
    getUsersList: () => dispatch(userAction.getUsersList())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBarContainer));
