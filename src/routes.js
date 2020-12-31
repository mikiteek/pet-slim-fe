import {lazy} from "react";

const AsyncMainPage = lazy(() => import("./views/MainPage" /* webpackChunkName: "home-page" */));
const AsyncLoginPage = lazy(() => import("./views/LoginPage" /* webpackChunkName: "login-page" */));
const AsyncRegisterPage = lazy(() => import("./views/RegisterPage" /* webpackChunkName: "register-page" */));
const AsyncCalcPage = lazy(() => import("./views/CalcPage" /* webpackChunkName: "calc-page" */))

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: AsyncMainPage,
    private: false,
    restricted: true,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: AsyncRegisterPage,
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: AsyncLoginPage,
    private: false,
    restricted: true,
  },
  {
    path: "/calc",
    label: "Calc",
    exact: true,
    component: AsyncCalcPage,
    private: true,
    restricted: false,
  },
];

export default routes;