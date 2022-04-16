import React from "react";
import s from "./Admin_editor.module.css";

const Admin_editor = (props) => {
  let title_ref = React.createRef();
  let summary_ref = React.createRef();

  let AddBook = () => {
    props.add();
  };

  let ChangeTitle = () => {
    let text = title_ref.current.value;
    props.change_title(text);
  };
  let ChangeSummary = () => {
    let text = summary_ref.current.value;
    props.change_summary(text);
  };

  let menu_switch = () => {
    props.switch();
  };

  return props.open ? (
    <div className={s.edit_menu_div}>
      <div className={s.edit_menu}>
        <div className={s.close} onClick={menu_switch}></div>
        <div className={s.edit_menu_group}>
          <div className={s.edit_menu_title}>Title</div>
          <div className={s.edit_menu_input}>
            <input
              ref={title_ref}
              onChange={ChangeTitle}
              value={props.add_menu_fields.title}
            ></input>
          </div>
        </div>
        <div className={s.edit_menu_group}>
          <div className={s.edit_menu_title}>Summary</div>
          <div className={s.edit_menu_input}>
            <input
              ref={summary_ref}
              onChange={ChangeSummary}
              value={props.add_menu_fields.summary}
            ></input>
          </div>
        </div>
        <div className={s.edit_menu_btn}>
          <button onClick={AddBook}>Add</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Admin_editor;
