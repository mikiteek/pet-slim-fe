import React, {Component} from "react";
import styles from "./BurgerMenu.module.scss";
import Navigation from "../Navigation";

class BurgerMenu extends Component {
  render() {
    return (
      <div className={styles.burgerMenu}>
        <Navigation/>
      </div>
    );
  }
}

export default BurgerMenu;