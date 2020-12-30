import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import BurgerMenu from "./components/BurgerMenu";
import BurgerMenuBtn from "./components/BurgerMenuBtn";
import ModalWindow from "./components/ModalWindow";
import DailyCaloriesNorm from "./components/DailyCaloriesNorm";
import DailyCaloriesIntake from "./components/DailyCaloriesIntake";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import {connect} from "react-redux";
import toggleComponentsSelector from "./redux/toggleComponents/toggleComponentsSelector";
import userSelector from "./redux/user/userSelector";

class App extends Component {
  render() {
    const {modal, summary: {dayNormCalories}} = this.props;
    return (
      <Layout>
        <Header/>
        {/*<Navigation/>*/}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  modal: toggleComponentsSelector.getModalWindow(state),
  summary: userSelector.getSummary(state),
  spinner: toggleComponentsSelector.getSpinner(state),
})

export default connect(mapStateToProps)(App);