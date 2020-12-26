import axios from "axios";
import userActions from "./userActions";

axios.defaults.baseURL = "https://desolate-brook-81952.herokuapp.com";

const getSummary = ({height, age, currentWeight, targetWeight, bloodType}) => dispatch => {
  dispatch(userActions.getSummaryRequest());
  axios
    .get(`/users/summary?height=${height}&age=${age}&currentWeight=${currentWeight}&targetWeight=${targetWeight}&bloodType=${bloodType}`)
    .then(({data}) => dispatch(userActions.getSummarySuccess(data)))
    .catch(error => dispatch(userActions.getSummaryError(error)))
}

const register = credentials => dispatch => {
  dispatch(userActions.registerRequest());
  axios
    .post("/users/register", credentials)
    .then(({data}) => dispatch(userActions.registerSuccess(data)))
    .catch(error => dispatch(userActions.registerError(error)));
}

export default {
  getSummary,
  register,
}