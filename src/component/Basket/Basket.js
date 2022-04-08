import React from "react";
import s from "./Basket.module.css";
import Basket_Item from "./Basket_Item/Basket_Item";

const Basket = (props) => {
  let items = [1, 2, 3, 4, 5, 6];

  const items_arr = items.map((number) => <Basket_Item />);

  return props.open ? (
    <div className={s.basket}>
      <div className={s.basket_inner}>
        <div className={s.close}></div>
        <div className={s.basket_title}>Basket</div>
        <div className={s.basket_items}>{items_arr}</div>
        <div className={s.buy_menu}>
          <span className={s.buy_menu_count}>
            Total:<span className={s.buy_menu_currency}>$</span>390
          </span>
          <button>Buy all</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Basket;
