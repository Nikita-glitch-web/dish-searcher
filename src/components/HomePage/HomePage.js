import React from "react";
import style from "./HomePage.module.css";

const HomePage = (index) => {
  return (
    <div className={style.search_bar_container}>
      {index}
      <input
        placeholder="Enter ingredient"
        className={style.search_bar_input}
      />
    </div>
  );
};


export const PageOneHome = () => HomePage(1);