import { connect } from "react-redux";
import {
  AddItem,
  ChangeSummary,
  ChangeTitle,
  Switch_menu,
} from "../../Redux/admin_reducer";
import Admin_panel from "./Admin_panel";

const mapStateToPropse = (state) => {
  return {
    open_close: state.admin.add_menu_open,
    add_menu_fields: state.admin.add_menu_fields,
    list: state.admin.list_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch: () => {
      dispatch(Switch_menu());
    },
    change_title: (data) => {
      dispatch(ChangeTitle(data));
    },
    change_summary: (data) => {
      dispatch(ChangeSummary(data));
    },
    add: () => {
      dispatch(AddItem());
    },
  };
};

const Admin_panel_Container = connect(
  mapStateToPropse,
  mapDispatchToProps
)(Admin_panel);

export default Admin_panel_Container;
