import React, {Component, Suspense} from "react";
import {connect} from "react-redux";
import {Switch} from "react-router-dom";

import toggleComponentsSelector from "./redux/toggleComponents/toggleComponentsSelector";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import routes from "./routes";


class App extends Component {
  render() {
    const {spinner} = this.props;
    return (
      <Layout>
        {spinner && <Spinner/>}
        <Header/>
        <Suspense fallback={<Spinner/>}>
          <Switch>
            {
              routes.map(route => {
                return route.private ?
                  <PrivateRoute key={route.label} {...route}/> :
                  <PublicRoute key={route.label} {...route}/>
              })
            }
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  spinner: toggleComponentsSelector.getSpinner(state),
})

export default connect(mapStateToProps)(App);