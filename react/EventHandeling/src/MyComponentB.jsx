import React from "react";
import "./My.css";
import MyComponentC from "./MyComponentC.jsx";

const MyComponentB = () => {
  return (
    <div className="box">
      <h1>Component B</h1>
      <MyComponentC />
    </div>
  );
};

export default MyComponentB;
