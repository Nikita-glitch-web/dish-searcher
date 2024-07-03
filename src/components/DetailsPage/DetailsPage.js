import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const DetailsPage = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const params = useParams();
  console.log(params);
  const makeDetailsRequest = async () => {
    try {
      const request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,
        {
          method: "GET",
        }
      );
      const data = await request.json();
      console.log(data);
      console.log(request);
      setItems(data);
    } catch (e) {
      console.error(e);
      alert("ERROR");
    }
  };

  useEffect(() => {
    makeDetailsRequest();
    console.log("Details request works");

  }, []);

  return <h1>Details Page working</h1>;
};
