import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import UserInfo from "../UserInfo";
import BurgerMenuBtn from "../BurgerMenuBtn";
import Logo from "../Logo";

import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const isAuthorized = true;
    return (
      <nav className={styles.nav}>
        <Logo/>
        <div className={styles.verticalSeparator}></div>
        <ul className={styles.navList}>
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

export default Navigation;