import React, {Component} from "react";
import {ValidatorForm} from "react-form-validator-core";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import userSelector from "../../redux/user/userSelector";
import userOperations from "../../redux/user/userOperations";
import TextValidator from "../TextValidator";
import Button from "../Button/Button";
import styles from "./RegisterForm.module.scss";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit event");
  }

  handleClick = (page) => {
    this.props.history.push(`/users/${page}`);
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  render() {
    const formBlockStyles = [styles.formBlock, "container"].join(" ");
    const {name, email, password} = this.state;
    return (
      <div className={formBlockStyles}>
        <h2 className={styles.formTitle}>Регистрация</h2>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <div className={styles.inputsBlock}>
            <TextValidator
              onChange={this.handleChange}
              name="name"
              typw="text"
              value={name}
              placeholder="Имя *"
              containerProps={styles.testStyles}
              validators={["required", "minStringLength:2", "maxStringLength:40"]}
              errorMessages={["name is required", "enter more than 1 symbols", "enter less than 41 symbols"]}
            />
            <TextValidator
              onChange={this.handleChange}
              name="email"
              type="email"
              value={email}
              placeholder="Почта *"
              validators={["required", "isEmail"]}
              errorMessages={["email is required", "enter valid email"]}
            />
            <TextValidator
              onChange={this.handleChange}
              name="password"
              type="password"
              value={password}
              placeholder="Пароль *"
              validators={["required", "minStringLength:6", "maxStringLength:50"]}
              errorMessages={["email is required", "enter more than 5 symbols", "enter less than 51 symbols"]}
            />
          </div>
          <div className={styles.buttonsBlock}>
            <Button type="submit" value="Регистрация"/>
            <Button type="button" value="Вход" page="login" onFollowPage={this.handleClick}/>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
});

const mapDispatchToProps = {
  onRegisterUser: userOperations.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));