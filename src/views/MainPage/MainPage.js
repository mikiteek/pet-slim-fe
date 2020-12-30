import React, {Component} from "react";
import Header from "../../components/Header";
import DailyCaloriesNorm from "../../components/DailyCaloriesNorm";
import DailyCaloriesIntake from "../../components/DailyCaloriesIntake";
import ModalWindow from "../../components/ModalWindow";

import {connect} from "react-redux";
import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";

class MainPage extends Component {
  render() {
    const {modal} = this.props;
    return (
      <div>
        <Header/>
        <main>
          <DailyCaloriesNorm/>
          {modal &&
          <ModalWindow>
            <DailyCaloriesIntake/>
          </ModalWindow>
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: toggleComponentsSelector.getModalWindow(state),
});

export default connect(mapStateToProps)(MainPage);