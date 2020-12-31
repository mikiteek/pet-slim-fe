import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    const {location, isAuthorized} = this.props;
    let wrapperStyles = styles.wrapperAuthorized;
    if (!isAuthorized) {
      wrapperStyles = (location.pathname === "/") ? styles.wrapperMain: styles.wrapperPages;
    }
    return (
      <div className={wrapperStyles}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: userSelector.getToken(state),
});

export default connect(mapStateToProps)(withRouter(Layout));