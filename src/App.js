import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import BurgerMenu from "./components/BurgerMenu";
import BurgerMenuBtn from "./components/BurgerMenuBtn";
import ModalWindow from "./components/ModalWindow";

class App extends Component {
  render() {
    return (
      <div>
        <BurgerMenuBtn/>
        <Logo/>
        <UserInfo/>
        <BurgerMenu/>
        <ModalWindow>
          <p>hdfjksfhksjdfhs</p>
          <p>hdfjksfhksjdfhs</p>
          <p>hdfjksfhksjdfhs</p>
          <p>hdfjksfhksjdfhs</p>
          <p>hdfjksfhksjdfhs</p>
          <p>hdfjksfhksjdfhs</p>
        </ModalWindow>
      </div>
    );
  }
}

export default App;