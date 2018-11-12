import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import {loadCourses} from './actions/courseAction';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './style.css'; //Importring css from webpack
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(loadCourses());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
