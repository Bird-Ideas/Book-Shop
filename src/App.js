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
  let data = {
    title: "Енеїда",
    autor: "Котляревський Іван Петрович",
    img: "https://i.lb.ua/066/35/5996efb55456a.jpeg",
    price: "300",
    currency: "UAH",
    raiting: "4/5",
    publish_date: "1842",
    publisher: "Alcove Press",
    pages: "352",
    language: "Ukrainian",
    type: "Paperback",
    UPC: "9781643858241",
    descriptions:
      "«Енеї́да» — українська бурлескно-травестійна поема, написана українським письменником Іваном Котляревським, заснована на сюжеті однойменної класичної поеми римського поета Вергілія. Складається з шести частин, на відміну від дванадцяти частин Вергілія. Написана чотиристопним ямбом. Поема написана в добу становлення романтизму і націоналізму в Європі, на тлі ностальгії частини української еліти за козацькою державою, ліквідованою Росією в 1775–1786 роках. «Енеїда» — перша масштабна пам'ятка українського письменства, укладена розмовною українською мовою. Поема започаткувала становлення новочасної української літератури. Перші три частини поеми були видані в 1798 році, в Санкт-Петербурзі, без відома автора, під назвою: «Енеида. На малороссійскій языкъ перелиціованная И. Котляревскимъ». Повністю «Енеїда» вийшла в світ після смерті Котляревського, в 1842 році. Цей твір є першокласним джерелом з українознавства, українського побуту та культури XVIII століття. Як і оригінал, сюжет описує пригоди троянського отамана Енея, проте у викладі Котляревського вони подаються в антуражі тогочасної української культури. Після зруйнування батьківщини ворогами, Еней разом зі своїм козацьким військом шукає місця, де зміг би заснувати майбутню імперію. В його поневіряння втручаються боги, намагаючись хто допомогти, а хто завадити його подорожі.",
  };

  return (
    <div className="App">
      <HeaderContainer />
      <BasketContainer />
      <LoginContainer />

      <Routes>
        <Route path="*" element={<StartPage />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/catalog" element={<CatalogContainer />} />
        <Route
          path="/descriptions"
          element={<Item_Single_Page data={data} />}
        />
        <Route path="/admin" element={<Admin_panel_Container />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
