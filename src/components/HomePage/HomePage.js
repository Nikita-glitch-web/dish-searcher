import React, { useState } from "react";
import style from "./HomePage.module.css";

const HomePage = () => {
    // const mealRequest = () => {
    //   return `www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    // };
    // mealRequest();

  const [inputValue, setInputValue] = useState("");

  const SubmitInputChange = (e) => {
    setInputValue(e.target.value);
    // JSON.stringify(inputValue);
    console.log("input submit works");
    JSON.stringify(inputValue);
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
          {
            method: "GET",
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((responseData) => {
            console.log(responseData);
          });
  };

//   const SubmitFormChange = () => {
//     console.log(
//         "Form is submitted"
//     )
//   }

  return (
    <div className={style.search_bar_container}>
      <form >
        <input
          value={inputValue}
          type="text"
          placeholder="Enter ingredient"
          className={style.search_bar_input}
          onChange={SubmitInputChange}
        />
      </form>
    </div>
  );
};

export const Home = () => HomePage();
