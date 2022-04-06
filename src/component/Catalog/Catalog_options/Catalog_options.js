import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import s from "./Catalog_options.module.css";

const options = [
  { label: "Arts", value: "Arts" },
  { label: "Calture", value: "Calture" },
  { label: "Crime", value: "Crime", disabled: false },
  { label: "Animals", value: "Animals" },
  { label: "Comedy", value: "Comedy" },
  { label: "Horror", value: "Horror", disabled: false },
  { label: "Historical", value: "Historical" },
  { label: "Classics", value: "Classics" },
  { label: "Drama", value: "Drama", disabled: false },
];

const Catalog_options = (props) => {
  const [selected, setSelected] = useState([]);

  return (
    <div className={s.settings_item}>
      <label className={s.title}>{props.title}</label>
      <MultiSelect options={options} value={selected} onChange={setSelected} />
    </div>
  );
};

export default Catalog_options;
