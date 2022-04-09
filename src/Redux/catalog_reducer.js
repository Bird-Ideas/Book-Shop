import initialState from "./initialState";
const BASKET_SWITCH = "BasketSwitch";
const ADD_TO_BASKET = "AddToBasket";
const REMOVE_FROM_BASKET = "RemoveFromBasket";
const ITEM_MINUS = "ItemMinus";
const ITEM_PLUS = "ItemPlus";

const catalog_reducer = (state = initialState, action) => {
  switch (action.type) {
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
        currency: "",
        title: "",
        autor: "",
        img: "",
      };
      let create = true;
      state.basket_item.find((el) => {
        if (action.data == el.id) {
          temp = el;
          temp.count++;
          create = false;
        }
      });

      if (create) {
        state.catalog.find((el) => {
          if (action.data == el.id) {
            temp.id = el.id;
            temp.count++;
            temp.price = el.price;
            temp.currency = el.currency;
            temp.title = el.title;
            temp.autor = el.autor;
            temp.img = el.img;
          }
        });
        return { ...state, basket_item: [...state.basket_item, temp] };
      }
      return { ...state, basket_item: [...state.basket_item] };
    }
    case REMOVE_FROM_BASKET: {
    }
    case ITEM_MINUS: {
    }
    case ITEM_PLUS: {
    }
    default: {
      return state;
    }
  }
};

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
export const ItemMinusActionCreator = (data) => ({
  type: ITEM_MINUS,
  data,
});
export const ItemPlusActionCreator = (data) => ({
  type: ITEM_PLUS,
  data,
});
export default catalog_reducer;
