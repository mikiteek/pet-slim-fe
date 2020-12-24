import {createAction} from "@reduxjs/toolkit";

const toggleBurgerMenu = createAction("menu/toggleBurgerMenu");

const toggleModal = createAction("modal/toggleModalWindow");

export default {
  toggleBurgerMenu,
  toggleModal,
}