import React from "react";
import s from "./Item_Single_Page.module.css";
import img from "../../../media/books_img/dsc_00786.jpg";

const Item_Single_Page = (props) => {
  console.log(props);
  return (
    <div className={s.page}>
      <div className={s.way}>{"home>books>..."}</div>
      <div className={s.content}>
        <div className={s.img}>
          <img src={props.data.img}></img>
        </div>
        <div className={s.info}>
          <div className={s.title}>{props.data.title}</div>
          <div className={s.autor}>{props.data.autor}</div>
          <div className={s.stats}>
            <div className={s.stats_item}>
              Raiting:<div className={s.stats_item_line}></div>
              <div>{props.data.raiting}</div>
            </div>
            <div className={s.stats_item}>
              Publisher:<div className={s.stats_item_line}></div>
              <div>{props.data.publisher}</div>
            </div>
            <div className={s.stats_item}>
              Publish Date:<div className={s.stats_item_line}></div>
              <div>{props.data.publish_date}</div>
            </div>
            <div className={s.stats_item}>
              Pages:<div className={s.stats_item_line}></div>
              <div>{props.data.pages}</div>
            </div>
            <div className={s.stats_item}>
              Language:<div className={s.stats_item_line}></div>
              <div>{props.data.language}</div>
            </div>
            <div className={s.stats_item}>
              Type:<div className={s.stats_item_line}></div>
              <div>{props.data.type}</div>
            </div>
            <div className={s.stats_item}>
              EAN/UPC:<div className={s.stats_item_line}></div>
              <div>{props.data.UPC}</div>
            </div>
          </div>
          <div className={s.buy_menu}>
            <div className={s.price_div}>
              <span className={s.price_span}>
                <span className={s.price_span_currency}>
                  {props.data.currency}
                </span>
                {props.data.price}
              </span>
            </div>
            <div className={s.btn_div}>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.descriptions}>
        <h3>Descriptions:</h3>
        <p>{props.data.descriptions}</p>
      </div>
    </div>
  );
};

export default Item_Single_Page;
