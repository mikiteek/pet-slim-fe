import React, {Component} from "react";
import {ValidatorForm} from "react-form-validator-core";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import userSelector from "../../redux/user/userSelector";
import userOperations from "../../redux/user/userOperations";
import userActions from "../../redux/user/userActions";

import TextValidator from "../TextValidator";
import Button from "../Button/Button";
import {errorNotify} from "../../utils/notify";
import styles from "./RegisterForm.module.scss";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.resetState();
      setTimeout(() => this.props.history.push(`/users/login`), 3000);
    }
  }

  componentWillUnmount() {
    this.resetState();
  }

  resetState = () => {
    this.setState({name: "", email: "", password: ""});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.onRegisterUser(this.state);
  }

  handleClick = (page) => {
    this.props.history.push(`/${page}`);
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  handleError = () => {
    const {error: {data}, onResetError} = this.props;
    errorNotify(data.message);
    setTimeout(onResetError, 100);
  }

  render() {
    const formBlockStyles = [styles.formBlock, "container"].join(" ");
    const {name, email, password} = this.state;
    if (this.props.error.data) {
      this.handleError();
    }
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
              errorMessages={["password is required", "enter more than 5 symbols", "enter less than 51 symbols"]}
            />
          </div>
          <div className={styles.buttonsBlock}>
            <Button type="submit" value="Регистрация"/>
            <Button type="button" value="Вход" page="login" onFollowPage={this.handleClick}/>
          </div>
        </ValidatorForm>
        <ToastContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
  error: userSelector.getError(state),
});

const mapDispatchToProps = {
  onRegisterUser: userOperations.register,
  onResetError: userActions.resetError,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));