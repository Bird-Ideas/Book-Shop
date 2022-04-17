import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Item.module.css";

const Item = (props) => {
  let navigate = useNavigate();
  let basket_add = () => {
    props.add_to_basket({ id: props.item.id, price: props.item.price });
  };
  return (
    <>
      <div className={s.item}>
        <div
          className={s.img_div}
          onClick={() => {
            navigate(`/books/${props.item.id}`);
          }}
        >
          <img className={s.img} src={props.item.img}></img>
        </div>
        <div
          className={s.title}
          onClick={() => {
            navigate(`/books/${props.item.id}`);
          }}
        >
          <div>{props.item.title}</div>
        </div>
        <div className={s.autor}>{props.item.author}</div>
        <div className={s.btn_div}>
          <span className={s.price}>
            <span className={s.price_currency}>UAH</span>
            {props.item.price}
          </span>
          <button className={s.btn} onClick={basket_add}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
