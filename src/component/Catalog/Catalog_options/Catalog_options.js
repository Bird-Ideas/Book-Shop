import axios from "axios";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import s from "./Catalog_options.module.css";

const Catalog_options = (props) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]); 

  useEffect(() => {
    async function getOptions(){
      const request = await axios.get(`http://localhost:3001/options/${props.id}`); 
      const result = []; 
      for(const option of request.data) {
        result.push({label: option.name, value: option.name }); 
      }
      setOptions(result); 
    }

    getOptions(); 

  }, []); 

  async function optionChanged(e) {
    setSelected(e);
    props.onChanged(e); 
  }

  return (
    <div className={s.settings_item}>
      <label className={s.title}>{props.title}</label>
      <MultiSelect options={options} value={selected} onChange={optionChanged} />
    </div>
  );
};

export default Catalog_options;
