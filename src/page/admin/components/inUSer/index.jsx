import React, { useState } from "react";
import "./UserIn.css";
import axios from "axios";
import Form from "./form";
import { config } from "../../../../config";
import { Navigate } from "react-router-dom";
const AddUser = ({ seOpen, open,  setMsg }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const hendelChang = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hendelAdd = async (e) => {
    e.preventDefault()
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />
    try {
      // const add = await axios.post(`${config.api_host_dev}/register`
      const add = await axios.post(`${config.api_host_dev}/register`,
        {
          name: form.name,
          email: form.email,
          password: form.password,
          confpassword: form.confpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      setTimeout(() => {
        window.location.reload();
      }, 5000);
        setMsg(add.data.message);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  const layout = open ? "flex" : "";
  return (
    <div className="main-add" style={{ display: layout }}>
      <div className="row-add">
        {/* <p className="nottif">{msg}</p> */}
        <Form
          form={form}
          hendelChang={hendelChang}
          hendelAdd={hendelAdd}
          setOpen={seOpen}
        />
      </div>
    </div>
  );
};

export default AddUser;
