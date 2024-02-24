import React from "react";
import { HomePage } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css"

function App() {
  return (
    <div className={style.content_wrapper}>
      <HomePage />
    </div>
  );
}

export default App;
