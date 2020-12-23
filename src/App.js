import React, {Component} from "react";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";

class App extends Component{
  render() {
    return (
      <div>
        <Logo/>
        <UserInfo/>
      </div>
    );
  }
}

export default App;