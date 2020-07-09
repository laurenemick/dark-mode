import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Charts from "./components/Charts";
import Login from "./components/Login";
import Home from "./components/Home";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/charts">
          <Charts coinData={coinData} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
