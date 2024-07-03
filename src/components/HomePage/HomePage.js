import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";
import { SearchForm } from "../SearchForm/SearchForm";

const HomePage = () => {
    const navigate = useNavigate();
  // const mealRequest = () => {
  //   return `www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  // };
  // mealRequest();

  const submitHandler = (value) => {
    console.log(value);
    navigate(`/search?q=${value}`);
  };

  //   const SubmitFormChange = () => {
  //     console.log(
  //         "Form is submitted"
  //     )
  //   }

  return (
    <div className={style.search_bar_container}>
      <SearchForm onSubmit={submitHandler} />
    </div>
  );
};

export const Home = () => HomePage();
