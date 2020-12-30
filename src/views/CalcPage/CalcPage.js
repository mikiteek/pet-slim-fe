import React, {Component} from "react";
import Header from "../../components/Header";
import DailyCaloriesNorm from "../../components/DailyCaloriesNorm";
import ModalWindow from "../../components/ModalWindow";
import DailyCaloriesIntake from "../../components/DailyCaloriesIntake";

import {connect} from "react-redux";
import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";
import userSelector from "../../redux/user/userSelector";

class CalcPage extends Component {
  render() {
    const {modal} = this.props;
    return (
      <div>
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
        <div className={"Sidebar"}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: toggleComponentsSelector.getModalWindow(state),
});

export default connect(mapStateToProps)(CalcPage);