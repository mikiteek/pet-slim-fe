import React, {Component} from "react";
import Header from "../../components/Header";
import DailyCaloriesNorm from "../../components/DailyCaloriesNorm";
import DailyCaloriesIntake from "../../components/DailyCaloriesIntake";
import ModalWindow from "../../components/ModalWindow";
import Spinner from "../../components/Spinner";

import {connect} from "react-redux";
import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";

import styles from "./MainPage.module.scss";

class MainPage extends Component {
  render() {
    const {modal, spinner} = this.props;
    return (
      <div>
        <Header/>
        <main className={styles.main}>
          <DailyCaloriesNorm title="Посчитай свою суточную норму калорий прямо сейчас"/>
          {modal &&
          <ModalWindow>
            <DailyCaloriesIntake/>
          </ModalWindow>
          }
          {spinner && <Spinner/>}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: toggleComponentsSelector.getModalWindow(state),
  spinner: toggleComponentsSelector.getSpinner(state),
});

export default connect(mapStateToProps)(MainPage);