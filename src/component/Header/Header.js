import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import basket_img from "../../media/Font_Awesome_5_solid_shopping-basket.svg";

const Header = (props) => {
  let basket_switch = () => {
    props.switch_basket();
  };
  let login = true;
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <div className={s.nav_bar}>
          <NavLink to="/startpage">StartPage</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/descriptions">Single item</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
      <div className={s.search_bar}>
        <div className={s.search_bar_title}>
          <span>Bookstore 4 peoples </span>
        </div>

        <div className={s.search_bar_search}>
          <input
            className={
              login ? s.search_bar_input_log_in : s.search_bar_input_user
            }
            type="search"
            placeholder="Search books, authors, ISBNs..."
          />
        </div>

        <div className={s.search_bar_basket_and_login}>
          <div className={s.log_in}>
            <a className={s.basket_inside_log_in} href="#">
              Log in
            </a>
          </div>
          <div className={s.basket_image} onClick={basket_switch}>
            <img src={basket_img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
