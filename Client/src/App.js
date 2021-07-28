import React, { useState, useEffect } from "react";
import "./App.css";
import { ThreadProvider } from "./Context/ThreadProvider";
import reducer, { initState, actionTypes } from "./Context/reducer";
import Server from "./Server";
import { useStateValue } from "./Context/StateProvider";
import { LocProvider } from "./MapComponents/locContext";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const usr = JSON.parse(userData);
      dispatch({
        type: actionTypes.SET_USER,
        user: usr.user,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify({ user }));
  });

  return (
    <div className="app">
      <ThreadProvider initialState={initState} reducer={reducer}>
        <LocProvider>
          <Server />
        </LocProvider>
      </ThreadProvider>
    </div>
  );
}
export default App;
