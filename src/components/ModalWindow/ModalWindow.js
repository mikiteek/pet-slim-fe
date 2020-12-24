import React, {Component} from "react";
import {connect} from "react-redux";
import toggleComponentsActions from "../../redux/toggleComponents/toggleComponentsActions";
import styles from "./ModalWindow.module.scss";

class ModalWindow extends Component {
  handleClickModalContainer = ({target, currentTarget}) => {
    if (target === currentTarget) {
      this.props.onToggleModalWindow();
    }
  }
  render() {
    return (
      <div className={styles.modalContainer} onClick={this.handleClickModalContainer}>
        <div className={styles.modal}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleModalWindow: toggleComponentsActions.toggleModal,
}

export default connect(null, mapDispatchToProps)(ModalWindow);