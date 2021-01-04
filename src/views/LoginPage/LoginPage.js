import React, {Component} from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import styles from "./LoginPage.module.scss";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main className={styles.main}>
          <LoginForm/>
        </main>
      </div>
    );
  }
}

export default LoginPage;