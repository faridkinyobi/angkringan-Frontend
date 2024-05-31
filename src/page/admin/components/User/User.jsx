import axios from "axios";
import "../dsSaran/Saranadmin.css";
import { React, useState, useEffect } from "react";
import { config } from "../../../../config/index";
import CardUser from "./cardUser";
import { Navigate } from "react-router-dom";
const UserAdmin = ({ hendelId, setEdit, edit, open, setMsg, username, Id }) => {
  const [Dateuser, setDateUser] = useState([]);

  useEffect(() => {
    getUser();
    refreshToken();
  }, []);

  const getUser = async () => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;

    const Date = await axios.get(`${config.api_host_dev}/user`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    setDateUser(Date.data.data);
  };

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.log("token tidak ada");
        return;
      }
      const response = await axios.post(`${config.api_host_dev}/token`, {
        refreshToken,
      });

      localStorage.setItem("accestoken", response.data.accessToken);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const deleteUser = async (id) => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    if (window.confirm("Anda yakin ingin menghapus produk ini?")) {
      try {
        const Delet = await axios.delete(`${config.api_host_dev}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setMsg(Delet.data.message);
        getUser();
      } catch (error) {
        setMsg(error.response.data.message);
      }
    } else {
      // Jika pengguna membatalkan penghapusan
      alert("Penghapusan user dibatalkan.");
    }
  };
  const hendelEditUser = (id) => {
    // hendelId(id);
    !open && setEdit(!edit);
  };
  const widthContainer = open ? "widthUser" : "USerAdmin";
  return (
    <div className={widthContainer}>
      {Dateuser.map((item, index) => {
        return (
          <CardUser
            item={item}
            hendelEditUser={hendelEditUser}
            deleteUser={deleteUser}
            index={index}
            refreshToken={refreshToken}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default UserAdmin;
