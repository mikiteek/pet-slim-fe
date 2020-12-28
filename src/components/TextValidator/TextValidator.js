import React from "react";
import {ValidatorComponent} from "react-form-validator-core";
import styles from "./TextValidator.module.scss";

class TextValidator extends ValidatorComponent {
  renderValidatorComponent() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;

    return (
      <div className={styles.inputBlock}>
        <input
          {...rest}
          ref={(r) => { this.input = r; }}
          className={styles.formInput}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
      return null;
    }

    return (
      <div style={{ color: 'red' }} className={styles.error}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default TextValidator;