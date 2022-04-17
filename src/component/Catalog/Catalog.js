/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Catalog_options from "./Catalog_options/Catalog_options";
import Item from "./Item/Item";
import axios from "axios";

const Catalog = (props) => {
  const [books, setBooks] = useState([]);
  const [publisher, setPublisher] = useState([]); 
  const [cover, setCover] = useState([]); 
  const [lang, setLang] = useState([]); 

  useEffect(() => {
    async function getBooks() {
      const request = await axios.get(`http://localhost:3001/books`);
      setBooks(request.data);
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

  async function filter() {
    const pubOption = []; 
    for(const option of publisher){
      pubOption.push(option.value); 
    }
    const coOption = []; 
    for(const option of cover){
      coOption.push(option.value); 
    }
    const langOption = []; 
    for(const option of lang){
      langOption.push(option.value); 
    }
    console.log(pubOption, coOption, langOption); 
    const request = await axios.post(`http://localhost:3001/books/filtered`, 
    {
      publisher: pubOption, 
      cover: coOption, 
      language: langOption
    });
    setBooks(request.data);  
  }

  return (
    <div className={s.Catalog}>
      <div className={s.left}>
        <div className={s.left_inside}>
          <Catalog_options title="Publisher" id="publisher" onChanged={setPublisher}/>
          <Catalog_options title="Cover" id="cover" onChanged={setCover}/>
          <Catalog_options title="Language" id="language" onChanged={setLang}/>
          <button onClick={filter}>Filter</button>
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
