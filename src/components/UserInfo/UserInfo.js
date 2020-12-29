import React, {Component} from "react";
import {connect} from "react-redux";
import userOperations from "../../redux/user/userOperations";
import styles from "./UserInfo.module.scss";

class UserInfo extends Component {
  handleButtonClick() {
    this.props.onLogoutUser();
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

const mapDispatchToProps = {
  onLogoutUser: userOperations.logout,
}

export default connect(null, mapDispatchToProps)(UserInfo);