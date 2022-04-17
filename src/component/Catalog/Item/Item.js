import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Item.module.css";

const Item = (props) => {
  let navigate = useNavigate();
  let basket_switch = () => {
    props.switch();
    props.add_to_basket(props.item.id);
  };
  return (
    <>
      <div
        className={s.item}
        onClick={() => {
          navigate(`/books/${props.item.id}`);
        }}
      >
        <div className={s.img_div}>
          <img className={s.img} src={props.item.img}></img>
        </div>
        <div className={s.title}>
          <div>{props.item.title}</div>
        </div>
        <div className={s.autor}>{props.item.author}</div>
        <div className={s.btn_div}>
          <span className={s.price}>
            <span className={s.price_currency}>UAH</span>
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
