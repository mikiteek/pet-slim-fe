import React, {Component} from "react";
import Navigation from "../Navigation";
import UserInfo from "../UserInfo";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const userInfoStyles = [styles.userInfo, "container"].join(" ");
    return (
      <header className={styles.header}>
        <div className="container">
          <Navigation/>
        </div>
        <div className={styles.userInfoWrapper}>
          <div className={userInfoStyles}>
            <UserInfo/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;