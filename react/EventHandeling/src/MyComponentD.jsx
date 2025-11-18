
import React, { useContext } from "react";
import { UserContext } from "./MyComponentA"; // import the context object
import "./My.css";

const MyComponentD = () => {
  // pass the context object to useContext
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye: ${user}`}</h2>

      {/* Example: update context from deep child */}
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setUser("Adnan")}>Change name (D)</button>
      </div>
    </div>
  );
};

export default MyComponentD;
