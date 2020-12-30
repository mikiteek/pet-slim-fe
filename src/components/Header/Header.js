import React, {Component} from "react";
import Navigation from "../Navigation";
import UserInfo from "../UserInfo";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const userInfoStyles = [styles.userInfo, "container"].join(" ");
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation/>
        </div>
        {this.props.isAuthorized &&
        <div className={styles.userInfoWrapper}>
          <div className={userInfoStyles}>
            <UserInfo/>
          </div>
        </div>}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: userSelector.isAuthenticated(state),
})

export default connect(mapStateToProps)(Header);