import "./App.css";
import Catalog from "./component/Catalog/Catalog";
import Descriptions from "./component/Descriptions/Descriptions";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import StartPage from "./component/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import Profile from "./component/Profile/Profile";
import Basket from "./component/Basket/Basket";
import React, { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />


      <Routes>
        <Route path="*" element={<StartPage />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/descriptions" element={<Descriptions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
