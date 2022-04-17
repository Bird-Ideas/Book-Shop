import initialState from "./initialState";
const BASKET_SWITCH = "BasketSwitch";
const ADD_TO_BASKET = "AddToBasket";
const REMOVE_FROM_BASKET = "RemoveFromBasket";
const REMOVE_ALL_FROM_BASKET = "RemoveAllFromBasket";
const ITEM_MINUS = "ItemMinus";
const ITEM_PLUS = "ItemPlus";
const LOGIN = "Login";
const LOGIN_SWITCH = "LoginSwitch";
const SET_BOOKS = "SetBooks";

const catalog_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: {
      return { ...state, catalog: action.data };
    }
    case BASKET_SWITCH: {
      if (state.basket_open) {
        return {
          ...state,
          basket_open: false,
        };
      } else {
        return {
          ...state,
          basket_open: true,
        };
      }
    }
    case ADD_TO_BASKET: {
      debugger;
      let temp = {
        id: 0,
        count: 0,
        price: 0,
      };
      let create = true;
      let total_price = 0;

      state.basket_item.find((el) => {
        if (action.data.id == el.id) {
          temp = el;
          temp.count++;
          create = false;
        }

        total_price = total_price + el.price * el.count;
      });

      if (create) {
        state.basket_item.push({
          id: action.data.id,
          count: 1,
          price: action.data.price,
        });
        total_price = total_price + action.data.price;
        return {
          ...state,
          basket_item: [...state.basket_item],
          basket_total_price: total_price,
        };
      }
      return {
        ...state,
        basket_item: [...state.basket_item],
        basket_total_price: total_price,
      };
    }
    case REMOVE_FROM_BASKET: {
      let total_price = 0;
      debugger;
      let filtered = state.basket_item.filter(function (value, index, arr) {
        return value.id != action.data;
      });
      filtered.find((el) => {
        total_price = total_price + el.price * el.count;
      });
      return {
        ...state,
        basket_item: filtered,
        basket_total_price: total_price,
      };
    }
    case REMOVE_ALL_FROM_BASKET: {
      return {
        ...state,
        basket_item: [],
        basket_total_price: 0,
      };
    }
    case ITEM_MINUS: {
      let total_price = 0;
      state.basket_item.find((el) => {
        if (action.data == el.id) {
          el.count--;
        }

        total_price = total_price + el.price * el.count;
      });
      return {
        ...state,
        basket_item: [...state.basket_item],
        basket_total_price: total_price,
      };
    }
    case ITEM_PLUS: {
      let total_price = 0;
      state.basket_item.find((el) => {
        if (action.data == el.id) {
          el.count++;
        }

        total_price = total_price + el.price * el.count;
      });
      return {
        ...state,
        basket_item: [...state.basket_item],
        basket_total_price: total_price,
      };
    }
    case LOGIN: {
      return state;
    }
    case LOGIN_SWITCH: {
      if (state.login_open) {
        return {
          ...state,
          login_open: false,
        };
      } else {
        return {
          ...state,
          login_open: true,
        };
      }
    }

    default: {
      return state;
    }
  }
};
export const SetBooks = (data) => ({ type: SET_BOOKS, data });

export const BasketSwitchActionCreator = () => ({
  type: BASKET_SWITCH,
});

export const AddToBasketActionCreator = (data) => ({
  type: ADD_TO_BASKET,
  data,
});
export const RemoveFromBasketActionCreator = (data) => ({
  type: REMOVE_FROM_BASKET,
  data,
});
export const RemoveAllActionCreator = () => ({
  type: REMOVE_ALL_FROM_BASKET,
});
export const ItemMinusActionCreator = (data) => ({
  type: ITEM_MINUS,
  data,
});
export const ItemPlusActionCreator = (data) => ({
  type: ITEM_PLUS,
  data,
});

export const LoginSwitch = () => ({ type: LOGIN_SWITCH });

export default catalog_reducer;
