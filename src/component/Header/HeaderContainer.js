import { connect } from "react-redux";
import { BasketSwitchActionCreator } from "../../Redux/catalog_reducer";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => {
  return {
    switch_basket: () => {
      dispatch(BasketSwitchActionCreator());
    },
  };
};

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;
