import React from "react";
import s from "./Basket_Item.module.css";

const Basket_Item = (props) => {
  let increment = () => {
    props.increment(props.data.id);
  };
  let decrement = () => {
    props.decrement(props.data.id);
  };
  let remove = () => {
    props.remove(props.data.id);
  };
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={props.data.img}></img>
      </div>
      <div className={s.content}>
        <span className={s.content_title} title={props.data.title}>
          {props.data.title}
        </span>
        <div className={s.content_control}>
          <div className={s.remove_btn} onClick={remove}>
            <span>Remove</span>
          </div>
          <button
            className={s.control_btn}
            disabled={props.data.count <= 1 ? true : false}
            onClick={decrement}
          >
            -
          </button>
          <span className={s.control_count}>{props.data.count}</span>
          <button className={s.control_btn} onClick={increment}>
            +
          </button>
          <span className={s.control_price}>
            <span className={s.control_price_currency}>
              {props.data.currency}
            </span>
            {props.data.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket_Item;
