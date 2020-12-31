import React, {Component} from "react";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import styles from "./RegisterPage.module.scss";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        {/*<Header/>*/}
        <main className={styles.main}>
          <RegisterForm/>
        </main>
      </div>
    );
  }
}

export default RegisterPage;