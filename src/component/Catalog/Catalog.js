import React from "react";
import s from "./Catalog.module.css";
import Catalog_options from "./Catalog_options/Catalog_options";
import Item from "./Item/Item";

const Catalog = (props) => {
  let items = props.catalog;

  const items_arr = items.map((number) => (
    <Item
      item={number}
      switch={props.switch_basket}
      add_to_basket={props.add_to_basket}
    />
  ));

  return (
    <div className={s.Catalog}>
      <div className={s.left}>
        <div className={s.left_inside}>
          <Catalog_options title="Genre" />
          <Catalog_options title="Autor" />
          <Catalog_options title="Publishing house" />
        </div>
      </div>
      <div className={s.right}>
        <div className={s.right_inside}>
          <div className={s.right_settings}>sort bar</div>
          <div className={s.catalog_items}>{items_arr}</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
