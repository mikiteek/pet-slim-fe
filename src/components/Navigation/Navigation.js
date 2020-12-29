import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import UserInfo from "../UserInfo";
import BurgerMenuBtn from "../BurgerMenuBtn";
import Logo from "../Logo";

import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const {location, isAuthorized} = this.props;
    const showSeparateLine = (location.pathname !== "/register" && location.pathname !== "/login");
    const navListStyles = showSeparateLine ? styles.navList: styles.navListPages;
    return (
      <nav className={styles.nav}>
        <Logo/>
        {showSeparateLine && <div className={styles.verticalSeparator}></div>}
        <ul className={navListStyles}>
          <li className={styles.navListItem}>
            <NavLink
              to={isAuthorized? "/diary": "/login"}
              className={styles.navListItemLink}
              activeClassName={styles.navListItemLinkActive}
            >
              {isAuthorized ? "Дневник": "Вход"}
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              to={isAuthorized? "/calc": "/register"}
              className={styles.navListItemLink}
              activeClassName={styles.navListItemLinkActive}
            >
              {isAuthorized ? "Калькулятор": "Регистрация"}
            </NavLink>
          </li>
        </ul>
        {isAuthorized && <UserInfo/>}
        {isAuthorized && <BurgerMenuBtn/>}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: userSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(withRouter(Navigation));