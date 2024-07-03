import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage"

function App() {
  return (
    <div className={style.content_wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

///dish-searcher/two
export default App;
