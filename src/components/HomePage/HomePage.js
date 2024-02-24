import React from "react";
import style from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={style.search_bar_container}>
      <input
        placeholder="Enter ingredient"
        className={style.search_bar_input}
      />
    </div>
  );
};
