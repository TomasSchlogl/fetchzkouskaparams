import "./App.scss";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Support from "./Support";
import Info from "./Info";
import Home from "./Home";
import Prices from "./Prices";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    /*     <Router>
      <Switch>
        <Route path="/:id" component={Funguj} />
      </Switch>
      {data &&
        data.length > 0 &&
        data.map((item, key) => (
          <div key={item.id} className="listWrapper">
            <Link to={`/${item.id}`}>
              <h1>{item.lastName}</h1>
              <h2>{item.firstName}</h2>
              <h5>{item.id}</h5>
              <p>{item.address.streetAddress}</p>
            </Link>
          </div>
        ))}
    </Router> */
    <Router>
      <div className="navbarWrapper">
        <li>
          <Link to="/support">support</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/prices">prices</Link>
        </li>
      </div>
      <Switch>
        <Route path="/prices">
          <Prices />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route exact path="/">
          <Home setData={setData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
