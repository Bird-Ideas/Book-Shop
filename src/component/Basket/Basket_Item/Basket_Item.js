import React from "react";
import s from "./Basket_Item.module.css";

const Basket_Item = (props) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={"https://i.lb.ua/066/35/5996efb55456a.jpeg"}></img>
      </div>
      <div className={s.content}>
        <span
          className={s.content_title}
          title={
            "неїда - Котляревськи Енеїда - КотляревськийЕнеїда - Котляревський"
          }
        >
          Енеїда - Котляревськи Енеїда - КотляревськийЕнеїда - Котляревський
        </span>
        <div className={s.content_control}>
          <button className={s.control_btn}>-</button>
          <span className={s.control_count}>1</span>
          <button className={s.control_btn}>+</button>
          <span className={s.control_price}>
            <span className={s.control_price_currency}>$</span>32
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket_Item;
