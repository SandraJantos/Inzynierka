import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../common/home/HomePage';
import UserPage from './userPage/UserPage';
import MyBooksPage from './myBooks/MyBooksPage';
import ProfilePage from '../common/profile/ProfilePage';
import ChatPage from './chat/ChatPage';
import ChatDetailPage from './chatDetail/ChatDetailPage';
import PlannerPage from './planner/PlannerPage';



class UserIndex extends Component { 
  render() {
    const {path} = this.props.match;
  
    return (
      <div> 
      <UserPage> 
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/:user`}  component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/:user/myBooks`} component={MyBooksPage} />
{/*          <Route exact path="/:user/chat" component={ChatPage} />
*/}          <Route exact path={`${process.env.PUBLIC_URL}/:user/planner`} component={PlannerPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/profile/:user`} component={ProfilePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/chatDetail/:chatListId`} component={ChatDetailPage} />

        </Switch>
      </UserPage>
      </div>
    );
  } 
}

export default UserIndex;
   