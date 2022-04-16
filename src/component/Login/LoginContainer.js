import { connect } from "react-redux";
import { LoginSwitch } from "../../Redux/catalog_reducer";

import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    open: state.data.login_open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch_login: () => {
      dispatch(LoginSwitch());
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
