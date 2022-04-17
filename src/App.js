import "./App.css";

import StartPage from "./component/StartPage/StartPage";
import { Route, Routes } from "react-router-dom";
import Profile from "./component/Profile/Profile";
import BasketContainer from "./component/Basket/BasketContainer";
import React from "react";
import Item_Single_Page from "./component/Catalog/Item_Single_Page/Item_Single_Page";
import HeaderContainer from "./component/Header/HeaderContainer";
import CatalogContainer from "./component/Catalog/CatalogContainer";

import Admin_panel_Container from "./component/Admin_panel/Admin_panel_Container";
import LoginContainer from "./component/Login/LoginContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <BasketContainer />
      <LoginContainer />

      <Routes>
        <Route path="*" element={<StartPage />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/catalog" element={<CatalogContainer />} />
        <Route path="/admin" element={<Admin_panel_Container />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/books/:id" element={<Item_Single_Page />} />
      </Routes>
    </div>
  );
}

export default App;
