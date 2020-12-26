import React, {Component} from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  handleClick = () => {
    const {onFollowPage, type, page} = this.props;
    if (type === "submit") {
      return;
    }
    onFollowPage(page);
  }

  render() {
    const {type, value} = this.props;
    let buttonStyles = styles.buttonSubmit;
    if (type === "button") {
      buttonStyles = [styles.buttonSubmit, styles.isLinkToPage].join(" ");
    }
    return (
      <button onClick={this.handleClick} className={buttonStyles} type={type}>{value}</button>
    );
  }
}

export default Button;