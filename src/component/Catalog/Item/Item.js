import React from "react";
import s from "./Item.module.css";
import img from "../../../media/books_img/194204_29734155_1.jpg";

const Item = (props) => {
  return (
    <>
      <div className={s.item}>
        <div className={s.img_div}>
          <a href="#">
            <img className={s.img} src={img}></img>
          </a>
        </div>
        <div className={s.title}>
          <a href="#">Енеїда Книжка Яка Має Сенс Для читата Сьогодні</a>
        </div>
        <div className={s.autor}>Іван Котляревський</div>
        <div className={s.btn_div}>
          <span className={s.price}>21$</span>
          <button className={s.btn}>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Item;
