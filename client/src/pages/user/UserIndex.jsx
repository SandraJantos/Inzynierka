import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from '../common/home/HomePage';
import UserPage from './userPage/UserPage';
import MyBooksPage from './myBooks/MyBooksPage';
import ProfilePage from '../common/profile/ProfilePage';
import ChatPage from './chat/ChatPage';
import ChatDetailPage from './chatDetail/ChatDetailPage';
import PlannerPage from './planner/PlannerPage';
import MapPage from '../common/map/MapPage';
import BookPage from '../common/book/BookPage';
import ReservationsPage from './reservations/ReservationsPage';

  
class UserIndex extends Component { 
  render() {
    const {path} = this.props.match;
      return (
      <div> 
      <UserPage> 
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/myBooks/" component={MyBooksPage} />
          <Route exact path="/chat/" component={ChatPage} />
          <Route exact path="/planner/" component={PlannerPage} />
          <Route exact path="/profile/:name" component={ProfilePage} />
          <Route exact path="/chatDetail/" component={ChatDetailPage} />
          <Route exact path="/map/" component={MapPage} />
          <Route exact path="/book/:name" component={BookPage} />
          <Route exact path="/reservations" component={ReservationsPage} />

        </Switch>
      </UserPage>
      </div>
    );
  } 
} 

export default UserIndex;
   