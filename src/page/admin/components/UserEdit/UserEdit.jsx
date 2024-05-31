import React from "react";
import "./UserEdit.css";
import { Button } from "../../../../componen/button/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../../../../config";
const UserEdit = ({ Id, setEdit, edit,setMsg }) => {
  

    const [email, setInEmail] = useState("");
    const [password, setInPassword] = useState("");



  const hendelSudmitPEsan = async (e) => {
    e.preventDefault()
    const Token = localStorage.getItem("token");
    if (!Token) {
      console.log("Token not found in localStorage");
      return;
    }
    try {
      const res = await axios.patch(`${config.api_host_dev}/user`, {
        email: email,
        password: password
      }, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      setMsg(res.data.message);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  const layout = !edit && "none";
  return (
    <div className="content-User" style={{display:layout}}>
      <div className="row-User">
        <form onSubmit={hendelSudmitPEsan} className="From-User">
          <h1 className="h1-USer" > edit Admin</h1>
          <div className="inputbox-User">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Nama"
              name="name"
              value={email}
              onChange={(e) => setInEmail(e.target.value)}
            />
          </div>
          <div className="inputbox-User">
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setInPassword(e.target.value)}
            />
          </div>
          <Button onClick={setEdit} className="User-button">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
