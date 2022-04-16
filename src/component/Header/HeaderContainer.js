import { connect } from "react-redux";
import {
  LoginSwitch,
  BasketSwitchActionCreator,
} from "../../Redux/catalog_reducer";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => {
  return {
    switch_basket: () => {
      dispatch(BasketSwitchActionCreator());
    },
    switch_login: () => {
      dispatch(LoginSwitch());
    },
  };
};

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;
