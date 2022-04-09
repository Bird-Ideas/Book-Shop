import React from "react";
import s from "./Basket.module.css";
import Basket_Item from "./Basket_Item/Basket_Item";

const Basket = (props) => {
  let basket_switch = () => {
    props.switch_basket();
  };
  const items_arr = props.basket_data.map((data) => (
    <Basket_Item data={data} />
  ));

  return props.open ? (
    <div className={s.basket}>
      <div className={s.basket_inner}>
        <div className={s.close} onClick={basket_switch}></div>
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
