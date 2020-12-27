import {toast} from "react-toastify";

const successOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const errorOptions = {
  position: "top-center",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const successRegisterNotify = () => {
  toast.success("You have success registered", successOptions);
}

const errorNotify = (error) => {
  toast.error(error, errorOptions);
}

export {
  successRegisterNotify,
  errorNotify,
};