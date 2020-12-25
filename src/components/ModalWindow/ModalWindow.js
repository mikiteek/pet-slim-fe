import React, {Component} from "react";
import {connect} from "react-redux";
import {ReactComponent as ReturnBtn} from "../../static/images/modal/return-icon.svg";
import {ReactComponent as CloseModalBtn} from "../../static/images/modal/close-modal-icon.svg";
import toggleComponentsActions from "../../redux/toggleComponents/toggleComponentsActions";
import styles from "./ModalWindow.module.scss";

class ModalWindow extends Component {
  handleClickModalContainer = ({target, currentTarget}) => {
    if (target === currentTarget) {
      this.props.onToggleModalWindow();
    }
  }

  handleCloseModal = () => {
    this.props.onToggleModalWindow();
  }

  render() {
    return (
      <div className={styles.modalContainer} onClick={this.handleClickModalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.returnBtnBlock} onClick={this.handleCloseModal}>
            <ReturnBtn/>
          </div>
        </div>
        <div className={styles.modal}>
          <div className={styles.closeModalBtn} onClick={this.handleCloseModal}>
            <CloseModalBtn/>
          </div>
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