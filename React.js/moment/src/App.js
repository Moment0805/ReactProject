import React, { useState, useEffect } from "react"; //-
import Data from "./Data";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showdata, setShowdata] = useState([]);
  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setShowdata(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h5> React Accordion </h5>
      <div className="row">
        {showdata.map((item, index) => (
          <div className="col-x1-5 col-lg-6 col-md-6 col-sm-6" key={index}>
            <Data {...item} />
          </div>
        ))}
      </div>
      <footer>@Moment Copyright 2024</footer>
    </div>
  );
};

export default App;
