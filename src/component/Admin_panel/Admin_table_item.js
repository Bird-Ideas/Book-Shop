import s from "./Admin_panel.module.css";

const Admin_table_item = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item_id}>{props.id}</div>
      <div className={s.item_title}>{props.title}</div>
      <div className={s.item_autor}>Котляревський</div>
      <div className={s.item_publisher}>Ранок</div>
      <div className={s.item_price}>399</div>
    </div>
  );
};

export default Admin_table_item;
