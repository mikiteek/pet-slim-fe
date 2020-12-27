import axios from "axios";
import userActions from "./userActions";
import toggleComponentsActions from "../toggleComponents/toggleComponentsActions";
import {successRegisterNotify} from "../../utils/notify";

axios.defaults.baseURL = "https://desolate-brook-81952.herokuapp.com";

const getSummary = ({height, age, currentWeight, targetWeight, bloodType}) => dispatch => {
  dispatch(userActions.getSummaryRequest());
  dispatch(toggleComponentsActions.toggleSpinner());
  axios
    .get(`/users/summary?height=${height}&age=${age}&currentWeight=${currentWeight}&targetWeight=${targetWeight}&bloodType=${bloodType}`)
    .then(({data}) => dispatch(userActions.getSummarySuccess(data)))
    .catch(error => dispatch(userActions.getSummaryError(error)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

const register = credentials => dispatch => {
  dispatch(userActions.registerRequest());
  dispatch(toggleComponentsActions.toggleSpinner());
  dispatch(userActions.resetError());
  axios
    .post("/users/register", credentials)
    .then(({data}) => {
      dispatch(userActions.registerSuccess(data));
      successRegisterNotify();
    })
    .catch(error => dispatch(userActions.registerError(error)))
    .finally(() => dispatch(toggleComponentsActions.toggleSpinner()));
}

export default {
  getSummary,
  register,
}