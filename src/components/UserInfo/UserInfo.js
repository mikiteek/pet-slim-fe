import React, {Component} from "react";
import styles from "./UserInfo.module.scss";

class UserInfo extends Component {
  handleButtonClick() {
    console.log("click on button 'Выйти'");
    console.log("Unset token");
  }

  render() {
    const name = "Mikiteek";
    return (
      <div className={styles.userInfoBlock}>
        <span className={styles.userName}>{name}</span>
        <div className={styles.separateLine}></div>
        <button
          className={styles.btnLogout}
          onClick={this.handleButtonClick}
          type="button">
          Выйти
        </button>
      </div>
    );
  }
}
export default UserInfo;