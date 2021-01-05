import React, {Component} from "react";
import {connect} from "react-redux";
import toggleComponentsSelector from "../../redux/toggleComponents/toggleComponentsSelector";
import userSelector from "../../redux/user/userSelector";

import Header from "../../components/Header/Header";
import BurgerMenu from "../../components/BurgerMenu";
import SideBar from "../../components/SideBar";

import styles from "../CalcPage/CalcPage.module.scss";


class DiaryPage extends Component {
  render() {
    const {burger} = this.props;
    return (
      <div>
        <main className={styles.main}>
          <div className={styles.dailyBlock}>
            <Header/>
            {burger && <BurgerMenu/>}
            <h2>Diary page here we are</h2>
          </div>
          <SideBar/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  burger: toggleComponentsSelector.getBurgerMenu(state),
});

export default connect(mapStateToProps)(DiaryPage)