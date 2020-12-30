import axios from "axios";
import userActions from "./userActions";
import toggleComponentsActions from "../toggleComponents/toggleComponentsActions";
import {successRegisterNotify} from "../../utils/notify";

axios.defaults.baseURL = "https://desolate-brook-81952.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  }
}

const getSummary = ({height, age, currentWeight, targetWeight, bloodType}) => dispatch => {
  dispatch(userActions.getSummaryRequest());
  dispatch(toggleComponentsActions.toggleSpinner());
  axios
    .get(`/users/summary?height=${height}&age=${age}&currentWeight=${currentWeight}&targetWeight=${targetWeight}&bloodType=${bloodType}`)
    .then(({data}) => dispatch(userActions.getSummarySuccess(data)))
    .catch(({response}) => dispatch(userActions.getSummaryError(response)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

const register = credentials => dispatch => {
  dispatch(userActions.registerRequest());
  dispatch(toggleComponentsActions.toggleSpinner());
  // dispatch(userActions.resetError());
  axios
    .post("/users/register", credentials)
    .then(({data}) => {
      dispatch(userActions.registerSuccess(data));
      successRegisterNotify();
    })
    .catch(({response}) => dispatch(userActions.registerError(response)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

const login = credentials => dispatch => {
  dispatch(userActions.loginRequest());
  dispatch(toggleComponentsActions.toggleSpinner());
  // dispatch(userActions.resetError());
  axios
    .post("/users/login", credentials)
    .then(({data}) => {
      token.set(data.token);
      dispatch(userActions.loginSuccess(data));
    })
    .catch(({response}) => dispatch(userActions.loginError(response)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

const logout = () => dispatch => {
  dispatch(userActions.logoutRequest());
  dispatch(toggleComponentsActions.toggleSpinner());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(userActions.logoutSuccess());
    })
    .catch(({response}) => dispatch(userActions.logoutError(response)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

export default {
  getSummary,
  register,
  login,
  logout,
}