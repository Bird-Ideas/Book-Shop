import s from "./Admin_panel.module.css";
import Admin_table_item from "./Admin_table_item";
import Admin_editor from "./Admin_editor/Admin_editor";

const Admin_panel = (props) => {
  let menu_switch = () => {
    props.switch();
  };
  debugger;
  const arr = props.list.map((value) => {
    return <Admin_table_item id={value.id} title={value.title} />;
  });

  return (
    <div className={s.body}>
      <button className={s.add_btn} onClick={menu_switch}>
        Add
      </button>
      <Admin_editor
        open={props.open_close}
        switch={props.switch}
        add_menu_fields={props.add_menu_fields}
        change_title={props.change_title}
        change_summary={props.change_summary}
        add={props.add}
      />
      <div className={s.list_div}>
        <div className={s.list}>
          <div className={s.search_bar}>
            <input placeholder="Search..."></input>
          </div>
          <div className={s.list_items}>
            <div className={s.list_header}>
              <div className={s.item_id}>#</div>
              <div className={s.item_title}>title</div>
              <div className={s.item_autor}>autor</div>
              <div className={s.item_publisher}>publisher</div>
              <div className={s.item_price}>price</div>
            </div>
            {arr}
            <div className={s.load_more_div}>
              <button>Load more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_panel;
