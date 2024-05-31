import { React, useState } from "react";
import "./DasboarSaran.css";
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import DsSaran from "../components/dsSaran/Sarandmin";
import { Navigate } from "react-router-dom";
const DasbordSaran = () => {
  const [msg, setMsg] = useState(false);

  setTimeout(() => {
    setMsg(false);
  }, 4000);
  const Token = localStorage.getItem("token");
  if (!Token) return <Navigate to="/login" replace={true}/>

  return (
    <div className="DasbordSaran">
      <NavbarAdmin />
      {setTimeout && (
        <p
          style={{
            fontSize: "1.5rem",
            background: msg ? "red" : "",
            marginLeft: "9rem",
            width: "40%",
            textAlign: "center",
            padding: "1rem",
            color:"white"
          }}
        >
          {msg}
        </p>
      )}
      <div>
        <DsSaran setMsg={setMsg} />
      </div>
    </div>
  );
};

export default DasbordSaran;
