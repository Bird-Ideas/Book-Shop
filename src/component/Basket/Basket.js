import React from "react";
import s from "./Basket.module.css";
import Basket_Item from "./Basket_Item/Basket_Item";

const Basket = (props) => {
  let basket_switch = () => {
    props.switch_basket();
  };
  let remove_all = () => {
    props.remove_all();
  };
  const items_arr = props.basket_item.map((data) => (
    <Basket_Item
      basket_item={data}
      increment={props.increment}
      decrement={props.decrement}
      remove={props.remove_one}
    />
  ));

  return props.open ? (
    <div className={s.basket}>
      <div className={s.basket_inner}>
        <div className={s.close} onClick={basket_switch}></div>
        <div className={s.basket_title}>Basket</div>
        <div className={s.basket_items}>{items_arr}</div>
        <div className={s.buy_menu}>
          <button onClick={remove_all}>Remove all</button>
          <span className={s.buy_menu_count}>
            Total:<span className={s.buy_menu_currency}>UAH</span>
            {props.basket_total_price}
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
