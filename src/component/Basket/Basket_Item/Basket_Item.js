import s from "./Basket_Item.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Basket_Item = (props) => {
  const [book, setBook] = useState("");

  useEffect(() => {
    async function getBook() {
      const result = await axios.get(
        `http://localhost:3001/books/${props.basket_item.id}`
      );

      setBook(result.data);
    }

    getBook();
  }, []);

  let increment = () => {
    props.increment(book.id);
  };
  let decrement = () => {
    props.decrement(book.id);
  };
  let remove = () => {
    props.remove(book.id);
  };
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={""}></img>
      </div>
      <div className={s.content}>
        <span className={s.content_title} title={book.title}>
          {book.title}
        </span>
        <div className={s.content_control}>
          <div className={s.remove_btn} onClick={remove}>
            <span>Remove</span>
          </div>
          <button
            className={s.control_btn}
            disabled={props.basket_item.count <= 1 ? true : false}
            onClick={decrement}
          >
            -
          </button>
          <span className={s.control_count}>{props.basket_item.count}</span>
          <button className={s.control_btn} onClick={increment}>
            +
          </button>
          <span className={s.control_price}>
            <span className={s.control_price_currency}>{"UAH"}</span>
            {book.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket_Item;
