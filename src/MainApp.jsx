import React from "react";

import Routes from "~/routes";
import Header from "~/components/Header";
import { BrowserRouter } from "react-router-dom";

class MainApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  }
}
export default MainApp;
