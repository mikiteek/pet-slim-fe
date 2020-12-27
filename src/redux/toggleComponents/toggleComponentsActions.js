import {createAction} from "@reduxjs/toolkit";

const toggleBurgerMenu = createAction("menu/toggleBurgerMenu");

const toggleModal = createAction("modal/toggleModalWindow");

const toggleSpinner = createAction("spinner/toggleSpinner");

export default {
  toggleBurgerMenu,
  toggleModal,
  toggleSpinner,
}