import React from "react";
import "./My.css";
import MyComponentD from "./MyComponentD";

const MyComponentC = () => {
  return (
    <div className="box">
      <h1>Component C</h1>
      <MyComponentD />
    </div>
  );
};

export default MyComponentC;
