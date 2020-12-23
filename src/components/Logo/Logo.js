import React, {Component} from "react";
import styles from "./Logo.module.scss";
import {Link} from "react-router-dom";

class Logo extends Component {

  render() {
    return (
      <Link to={"/"}>
        <div className={styles.logo}>
          <h1 className="visually-hidden">
            Slimmom
          </h1>
        </div>
      </Link>
    );
  }
}

export default Logo;