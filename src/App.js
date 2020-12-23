import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import BurgerMenu from "./components/BurgerMenu";

class App extends Component{
  render() {
    return (
      <div>
        <Logo/>
        <UserInfo/>
        <BurgerMenu/>
      </div>
    );
  }
}

export default App;