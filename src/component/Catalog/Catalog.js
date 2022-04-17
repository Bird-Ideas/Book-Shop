import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Catalog_options from "./Catalog_options/Catalog_options";
import Item from "./Item/Item";
import axios from "axios";

const Catalog = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const result = await (
        await axios.get(`http://localhost:3001/books`)
      ).data;
      setBooks(result);
    }

    getBooks();
  }, []);

  let items;
  if (books.length > 0) {
    items = books.map((book) => (
      <Item
        key={book.id}
        item={book}
        switch={props.switch_basket}
        add_to_basket={props.add_to_basket}
      />
    ));
  }

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
          <div className={s.catalog_items}>{items}</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
