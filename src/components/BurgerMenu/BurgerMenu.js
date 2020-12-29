import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styles from "./BurgerMenu.module.scss";

class BurgerMenu extends Component {
  render() {
    return (
      <div className={styles.burgerMenu}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink
              to={"/diary"}
              className={styles.navListItemLink}
              activeClassName={styles.navListItemLinkActive}
            >
              Дневник
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              to={"/calc"}
              className={styles.navListItemLink}
              activeClassName={styles.navListItemLinkActive}
            >
              Калькулятор
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default BurgerMenu;