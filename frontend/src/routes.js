import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import isAuthenticated  from "./services/auth";

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/home"  component={Home}/>
        </Switch>
        </BrowserRouter>

    );
}