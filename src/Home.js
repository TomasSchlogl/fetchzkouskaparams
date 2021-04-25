import React from "react";

function Home() {
  return (
    <div>
      <h1>hello from home</h1>
    </div>
  );
}

export default Home;

/* import React, { useState, useEffect } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import List from "./List";

function Home() {
  useEffect(() => {
    console.log(data, "<---data");
  });
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
    <div>
      {data &&
        data.length > 0 &&
        data.map((item, id) => (
          <Link
            to={{
              pathname: `/recipe/${item.id}`,
              state: { recipe: item.id },
            }}
          >
            View Recipe
          </Link>
        ))}
    </div>
  );
}

export default Home;
 */
