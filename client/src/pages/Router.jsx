import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from './common/registration/RegistrationPage';
import LoginPage from './common/login/LoginPage';
import UserIndex from './user/UserIndex';


class Router extends Component { 
  render() {
    return (
      <BrowserRouter basename='/build'>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/registration}/`}  component={RegistrationPage} />
          <Route path={`${process.env.PUBLIC_URL}/login/`} component={LoginPage} />
          <Route path={`${process.env.PUBLIC_URL}/`} component={UserIndex} />

        </Switch>
      </BrowserRouter>
    );
  } 
}  

export default Router;
            