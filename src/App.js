import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import BurgerMenu from "./components/BurgerMenu";
import BurgerMenuBtn from "./components/BurgerMenuBtn";
import ModalWindow from "./components/ModalWindow";
import DailyCaloriesNorm from "./components/DailyCaloriesNorm";

class App extends Component {
  render() {
    return (
      <div>
        <BurgerMenuBtn/>
        <Logo/>
        <UserInfo/>
        {/*<BurgerMenu/>*/}
        <DailyCaloriesNorm/>
      </div>
    );
  }
}

export default App;