import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";

const PublicRoute = ({component: Component, isAuthorized, ...routeProps}) =>
  <Route
    {...routeProps}
    render={props =>
      isAuthorized && routeProps.restricted ? <Redirect to={"/calc"}/>: <Component {...props}/>
    }
  />

const mapStateToProps = state => ({
  isAuthorized: userSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);