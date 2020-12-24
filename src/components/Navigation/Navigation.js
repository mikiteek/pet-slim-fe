import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const isAuthorized = false;
    return (
      <nav>
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
      </nav>
    );
  }
}

export default Navigation;