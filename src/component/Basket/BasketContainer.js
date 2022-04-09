import { connect } from "react-redux";
import { BasketSwitchActionCreator } from "../../Redux/catalog_reducer";

import Basket from "./Basket";

const mapStateToProps = (state) => {
  return {
    open: state.data.basket_open,
    basket_data: state.data.basket_item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch_basket: () => {
      dispatch(BasketSwitchActionCreator());
    },
  };
};

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default BasketContainer;
