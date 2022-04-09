import { connect } from "react-redux";
import {
  BasketSwitchActionCreator,
  AddToBasketActionCreator,
} from "../../Redux/catalog_reducer";
import Catalog from "./Catalog";

const mapStateToProps = (state) => {
  return {
    catalog: state.data.catalog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch_basket: () => {
      dispatch(BasketSwitchActionCreator());
    },
    add_to_basket: (data) => {
      dispatch(AddToBasketActionCreator(data));
    },
  };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
