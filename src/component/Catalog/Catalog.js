import React from "react";
import s from "./Catalog.module.css";
import Item from "./Item/Item";

const Catalog = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const items_arr = items.map((number) => <Item />);

  return (
    <div className={s.Catalog}>
      <div className={s.left}>
        <div className={s.left_inside}>
          <input></input>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.right_inside}>
          <div className={s.right_settings}>settings bar</div>
          <div className={s.catalog_items}>{items_arr}</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
