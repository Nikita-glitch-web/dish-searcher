import React from "react";
import style from "./SearchPage.module.css";

export const SearchPage = (index) => {
  return (
    <div className={style.search_bar_container}>
      <input
        placeholder="Enter ingredient"
        className={style.search_bar_input}
      />
    </div>
  );
};


