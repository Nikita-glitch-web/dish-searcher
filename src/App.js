import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOneHome } from "./components/HomePage/HomePage";
import style from "./styles/App.module.css"
import { PageSearchTwo } from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className={style.content_wrapper}>
        <BrowserRouter>
        <Routes>
            <Route path="/dish-searcher/one" element={<PageOneHome />} />
            <Route path="/dish-searcher/two" element={<PageSearchTwo />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
