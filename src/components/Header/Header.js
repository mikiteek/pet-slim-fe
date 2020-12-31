import React, {Component} from "react";
import Navigation from "../Navigation";
import UserInfo from "../UserInfo";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const {isAuthorized} = this.props;
    const userInfoStyles = [styles.userInfo, "container"].join(" ");
    const userInfoWrapperStyles = (isAuthorized)? styles.userInfoWrapper: [styles.userInfoWrapper, styles.userInfoWrapperSimple].join(" ");
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation/>
        </div>
        <div className={userInfoWrapperStyles}>
          { isAuthorized &&
          <div className={userInfoStyles}>
            <UserInfo/>
          </div>
          }
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: userSelector.isAuthenticated(state),
})

export default connect(mapStateToProps)(Header);