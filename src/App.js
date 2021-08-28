import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import history from "./helpers/history";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
