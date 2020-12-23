import React, {Component} from "react";
import {ReactComponent as OpenIcon} from "../../static/images/burger-menu/burger-menu-open-icon-24px.svg";
import {ReactComponent as CloseIcon} from "../../static/images/burger-menu/burger-menu-close-icon-24px.svg";
import styles from "./BurgerMenuBtn.module.scss";

class BurgerMenuBtn extends Component {
  state = {
    toggleMenuBtn: true,
  }

  handleClickBurgerBtn = () => {
    this.setState({toggleMenuBtn: !this.state.toggleMenuBtn});
    console.log("and show or hidden BurgerMenu")
  }
  render() {
    const {toggleMenuBtn} = this.state;
    return (
      <div
        className={styles.burgerMenuBtn}
        onClick={this.handleClickBurgerBtn}>
        {toggleMenuBtn? <OpenIcon/>: <CloseIcon/>}
      </div>
    );
  }
}

export default BurgerMenuBtn;