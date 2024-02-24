import React from "react";
import style from "./SearchPage.module.css";

export const SearchPage = () => {
  return (
    <div className={style.search_bar_container}>
      <input
        placeholder="Enter ingredient"
        className={style.search_bar_input}
      />
    </div>
  );
};
