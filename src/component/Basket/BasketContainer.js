import { connect } from "react-redux";
import {
  BasketSwitchActionCreator,
  ItemMinusActionCreator,
  ItemPlusActionCreator,
  RemoveFromBasketActionCreator,
  RemoveAllActionCreator,
} from "../../Redux/catalog_reducer";

import Basket from "./Basket";

const mapStateToProps = (state) => {
  return {
    open: state.data.basket_open,
    basket_data: state.data.basket_item,
    basket_total_price: state.data.basket_total_price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch_basket: () => {
      dispatch(BasketSwitchActionCreator());
    },
    increment: (data) => {
      dispatch(ItemPlusActionCreator(data));
    },
    decrement: (data) => {
      dispatch(ItemMinusActionCreator(data));
    },
    remove_one: (data) => {
      dispatch(RemoveFromBasketActionCreator(data));
    },
    remove_all: () => {
      dispatch(RemoveAllActionCreator());
    },
  };
};

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default BasketContainer;
