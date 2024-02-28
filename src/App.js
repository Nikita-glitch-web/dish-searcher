import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css"
import { SearchPage } from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className={style.content_wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="dish-searcher/home" element={<Home />} />
          <Route path="dish-searcher/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

///dish-searcher/two
export default App;
