import { useState } from "react";
import s from "./Login.module.css";
import axios from "axios";

const Login = (props) => {
  const login_switch = () => {
    props.switch_login();
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    const data = { login: username, pwd: password };
    const response = await axios.post("http://localhost:3001/login", data); 
    if(!response.data.error) {
      sessionStorage.setItem("accessToken", response.data);
    } else {
      alert(response.data.error); 
    }
    login_switch(); 
  }

  let cor1 = false;
  let cor2 = false;
  return props.open ? (
    <div className={s.login_div}>
      <div className={s.login}>
        <div className={s.close} onClick={login_switch}></div>
        <div className={s.login_inner}>
          <div className={s.title}>Nickname</div>
          <div className={s.input}>
            <input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
          </div>
          <div className={s.incorrect}>
            {" "}
            {cor1 ? "incorrect nickname" : "ㅤ"}
          </div>
          <div className={s.title}>Password</div>
          <div className={s.input}>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <div className={`${s.incorrect}`}>
            {cor2 ? "incorrect password" : "ㅤ"}
          </div>
          <div className={s.button_div}>
            <button onClick={onLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login;
