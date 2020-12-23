import React, {Component} from "react";
import {connect} from "react-redux";

import {ReactComponent as OpenIcon} from "../../static/images/burger-menu/burger-menu-open-icon-24px.svg";
import {ReactComponent as CloseIcon} from "../../static/images/burger-menu/burger-menu-close-icon-24px.svg";
import styles from "./BurgerMenuBtn.module.scss";

import burgerMenuSelector from "../../redux/burgerMenu/burgerMenuSelector";
import burgerMenuActions from "../../redux/burgerMenu/burgerMenuActions";

class BurgerMenuBtn extends Component {
  state = {
    toggleMenuBtn: true,
  }

  handleClickBurgerBtn = () => {
    this.setState({toggleMenuBtn: !this.state.toggleMenuBtn});
    this.props.onToggleBurgerMenu();
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

const mapStateToProps = state => ({
  burgerMenu: burgerMenuSelector.getBurgerMenu(state),
});

const mapDispatchToProps = {
  onToggleBurgerMenu: burgerMenuActions.toggleBurgerMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuBtn);