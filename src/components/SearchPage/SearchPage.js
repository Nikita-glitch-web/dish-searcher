import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchForm } from "../SearchForm/SearchForm";
import style from "./SearchPage.module.css";

export const SearchPage = (index) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  console.log(items);
  const makeSearchRequest = async (inputValue) => {
    try {
      const request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      console.log(data);
      setItems(data.meals);
    } catch (e) {
      console.error(e);
      alert("ERRRO");
    }
  };

  useEffect(() => {
    console.log("RENDERD", searchParams.get("q"));
    const queryParamsValue = searchParams.get("q");
    if (queryParamsValue) {
      setInputValue(queryParamsValue);
      makeSearchRequest(queryParamsValue);
    }
  }, [searchParams]);

  const submitHandler = (value) => {
    console.log(value);
    setSearchParams({ q: value });
  };

  return (
    <div className={style.search_bar_container}>
      <SearchForm defaultValue={inputValue} onSubmit={submitHandler} />
      {items.map((item) => {
        console.log(item)
        return (
          <div className={style.details_content_greed}>
            <Link to={`/details/${item.idMeal}`} title={item.idMeal}>
              <div className={style.details_content_item}>
                <img
                  alt=""
                  src={item.strMealThumb}
                  className={style.meal_img}
                />
                <h1>{item.strMeal}</h1>
                <p>{item.strInstructions}</p>
                <div className={style.ingredients_column}>
                </div>
              </div>
            </Link>
            </div>
        );
      })}
    </div>
  );
};
