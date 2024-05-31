import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { config } from "../../config/index";
import Form from "./form";
//import Cookies from 'js-cookie';

const Login = ({ SetUsername }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const hendelChang = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [msg, setMsg] = useState(false);

  setTimeout(() => {
    setMsg(false);
  }, 4000);
  
  const navigate = useNavigate();
  const hendelSubmite = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.api_host_dev}/login`, {
        email: form.email,
        password: form.password,
      });

      SetUsername(res.data.data.username);
      //const { accessToken, refreshToken } = res.data.data;
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("refreshToken", res.data.data.refreshToken);
      //const acc = res.data.data.accessToken
      //console.log(acc)
      //Cookies.set('jwt',res.data.accessToken)
      setMsg(res.data.message);
      navigate("/user");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
const bg = msg? "#685b55": ""
  return (
    <div className="main-login">
      <div className="row-login">
        <p className="nottif"style={{background:bg,borderRadius:"0.5rem"}}>{msg}</p>
        <h1>Login</h1>
        <Form
          form={form}
          hendelChang={hendelChang}
          hendelSubmite={hendelSubmite}
        />
      </div>
    </div>
  );
};

export default Login;
