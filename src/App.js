import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import BurgerMenu from "./components/BurgerMenu";
import BurgerMenuBtn from "./components/BurgerMenuBtn";

class App extends Component {
  render() {
    return (
      <div>
        <BurgerMenuBtn/>
        <Logo/>
        <UserInfo/>
        <BurgerMenu/>
      </div>
    );
  }
}

export default App;