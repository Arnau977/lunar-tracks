import React from "react";
import "./i18n";
import "./App.css";
import { Routes } from "./App.routes";

function App() {

  return (
    <>
      <Routes isLogged={true}/>
    </>
  );
}

export default App;
