import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const request = await axios.get(`http://localhost:3001/profile`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      });
      console.log(request.data);
      setUser(request.data);
    }

    getUser();
  }, []);

  return (
    <div className={s.profile}>
      <span>User: {user.login}</span>
      <br></br>
      <span>Email: {user.email}</span>
      <br></br>
      <span>Password hash: {user.pwd}</span>
      <br></br>
    </div>
  );
};

export default Profile;
