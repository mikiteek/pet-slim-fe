import React, {Component} from "react";
import Header from "../../components/Header";
import DailyCaloriesNorm from "../../components/DailyCaloriesNorm";
import ModalWindow from "../../components/ModalWindow";
import DailyCaloriesIntake from "../../components/DailyCaloriesIntake";
import SideBar from "../../components/SideBar";
import BurgerMenu from "../../components/BurgerMenu";

import {connect} from "react-redux";
import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";
import userSelector from "../../redux/user/userSelector";

import styles from "./CalcPage.module.scss";

class CalcPage extends Component {
  render() {
    const {modal, burger} = this.props;
    return (
      <div>
        <main className={styles.main}>
          <div className={styles.dailyBlock}>
            <Header/>
            {burger && <BurgerMenu/>}
            <DailyCaloriesNorm title="Узнай свою суточную норму калорий"/>
          </div>
          <SideBar/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: toggleComponentsSelector.getModalWindow(state),
  burger: toggleComponentsSelector.getBurgerMenu(state),
});

export default connect(mapStateToProps)(CalcPage);