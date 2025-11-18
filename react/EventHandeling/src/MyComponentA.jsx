import React, { createContext, useState } from "react";
import MyComponentB from "./MyComponentB.jsx";
import "./My.css";

export const UserContext = createContext(); // export the context

const MyComponentA = () => {
  const [user, setUser] = useState("Samith");

  return (
    // Provider must wrap the children that need access
    <UserContext.Provider value={{ user, setUser }}>
      <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello: ${user}`}</h2>

        {/* You don't need to pass user as a prop if using context */}
        <MyComponentB />

        {/* Example local control too (optional) */}
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setUser("Samith Jr.")}>Change name (A)</button>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default MyComponentA;

