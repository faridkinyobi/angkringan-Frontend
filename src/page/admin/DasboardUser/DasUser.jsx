import { React, useState } from "react";
import "./DasUser.css";
//import axios from "axios";
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import DateUser from "../components/User/User";
import { Navigate } from "react-router-dom";
import AddUser from "../components/inUSer";
import UserEdit from "../components/UserEdit/UserEdit";
// import Footers from "../../../componen/footer/Footer";

const Dasbord = ({ username }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const [Id, setId] = useState(null);
  const [msg, setMsg] = useState(false);

  setTimeout(() => {
    setMsg(false);
  }, 4000);

  const layoutAdd = open || edit ? "closeInput" : "";

  const hendelId = (id) => {
    setId(id);
  };
  const hendel = (e) => {
    !edit && setOpen(!open);
  };

  const Token = localStorage.getItem("token");
  if (!Token) return <Navigate to="/login" replace={true} />;

  return (
    <div className="Dasbord_User">
      <NavbarAdmin />
      <button
        className="buttonUser"
        onClick={hendel}
        style={{ background: open ? "red" : "" }}
      >
        {open ? "Close" : "Add"}
      </button>
      {setTimeout && (
        <p
          style={{
            fontSize: "1.5rem",
            background: msg ? "red" : "",
            marginLeft: "9rem",
            width: "40%",
            textAlign: "center",  
            padding: "1rem",
            color:"white",
          }}
        >
          {msg}
        </p>
      )}
      <div className={layoutAdd}>
        <DateUser
          setId={setId}
          setEdit={setEdit}
          edit={edit}
          hendelId={hendelId}
          Id={Id}
          open={open}
          setMsg={setMsg}
          username={username}
        />
        {open && (
          <AddUser
            setOpen={(e) => setOpen(!open)}
            open={open}
            edit={edit}
            setMsg={setMsg}
          />
        )}
        {/* <AddUser/> */}
        {edit && (
          <UserEdit
            onClick={() => setEdit(!edit)}
            Id={Id}
            edit={edit}
            setMsg={setMsg}
          />
        )}
      </div>
    </div>
  );
};

export default Dasbord;
