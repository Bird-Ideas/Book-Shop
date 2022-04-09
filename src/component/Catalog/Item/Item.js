import React from "react";
import s from "./Item.module.css";

const Item = (props) => {
  let basket_switch = () => {
    props.switch();
    props.add_to_basket(props.item.id);
  };
  return (
    <>
      <div className={s.item}>
        <div className={s.img_div}>
          <a href="#">
            <img className={s.img} src={props.item.img}></img>
          </a>
        </div>
        <div className={s.title}>
          <a href="#">{props.item.title}</a>
        </div>
        <div className={s.autor}>{props.item.autor}</div>
        <div className={s.btn_div}>
          <span className={s.price}>
            <span className={s.price_currency}>{props.item.currency}</span>
            {props.item.price}
          </span>
          <button className={s.btn} onClick={basket_switch}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
