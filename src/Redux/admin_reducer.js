const ADD_ITEM = "AddItem";
const SWITCH_ADD_MENU = "SwitchAddMenu";
const CHANGE_TITLE = "ChangeTitle";
const CHANGE_SUMMARY = "ChangeSummary";

const initialState = {
  add_menu_open: false,
  list_data: [{ id: 0, title: "", summary: "" }],
  add_menu_fields: {
    id: 0,
    title: "1",
    summary: "2",
  },
};

const admin_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (
        state.add_menu_fields.summary != "" &&
        state.add_menu_fields.title != ""
      ) {
        let temp = {
          id: 2,
          title: state.add_menu_fields.title,
          summary: state.add_menu_fields.summary,
        };
        return {
          ...state,
          add_menu_open: false,
          list_data: [...state.list_data, temp],
          add_menu_fields: { ...state.add_menu_fields, title: "", summary: "" },
        };
      }
      return state;
    }
    case SWITCH_ADD_MENU: {
      debugger;
      if (state.add_menu_open) {
        return { ...state, add_menu_open: false };
      } else {
        return { ...state, add_menu_open: true };
      }
    }
    case CHANGE_TITLE: {
      return {
        ...state,
        add_menu_fields: { ...state.add_menu_fields, title: action.data },
      };
    }
    case CHANGE_SUMMARY: {
      return {
        ...state,
        add_menu_fields: { ...state.add_menu_fields, summary: action.data },
      };
    }

    default: {
      return state;
    }
  }
};

export const AddItem = () => ({
  type: ADD_ITEM,
});
export const Switch_menu = () => ({
  type: SWITCH_ADD_MENU,
});
export const ChangeTitle = (data) => ({
  type: CHANGE_TITLE,
  data,
});
export const ChangeSummary = (data) => ({
  type: CHANGE_SUMMARY,
  data,
});
export default admin_reducer;
