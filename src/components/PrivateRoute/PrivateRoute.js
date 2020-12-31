import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";

const PrivateRoute = ({component: Component, isAuthorized, ...routeProps}) =>
  <Route
    {...routeProps}
    render={props =>
      isAuthorized ? <Component {...props}/> : <Redirect to="/login"/>
    }
  />;

const mapStateToProps = state => ({
  isAuthorized: userSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);