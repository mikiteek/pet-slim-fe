import React, {Component} from "react";
import {connect} from "react-redux";

import {ReactComponent as OpenIcon} from "../../static/images/burger-menu/burger-menu-open-icon-24px.svg";
import {ReactComponent as CloseIcon} from "../../static/images/burger-menu/burger-menu-close-icon-24px.svg";
import styles from "./BurgerMenuBtn.module.scss";

import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";
import toggleComponentsActions from "../../redux/toggleComponents/toggleComponentsActions";

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
  burgerMenu: toggleComponentsSelector.getBurgerMenu(state),
});

const mapDispatchToProps = {
  onToggleBurgerMenu: toggleComponentsActions.toggleBurgerMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuBtn);