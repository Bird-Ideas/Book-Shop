import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to="/startpage">
        <span className={s.title}>Book Shop</span>
      </NavLink>

      <div className={s.header_right}>
        <NavLink activeClassName={s.active} to="/catalog">
          Catalog
        </NavLink>
        <NavLink activeClassName={s.active} to="/descriptions">
          Descriptions
        </NavLink>
        <NavLink activeClassName={s.active} to="/about">
          About
        </NavLink>
        <NavLink activeClassName={s.active} to="/profile">
          Profile
        </NavLink>
        <NavLink activeClassName={s.active} to="/basket">
          Basket
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
