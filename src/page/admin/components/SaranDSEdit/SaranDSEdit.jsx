import React from "react";
import "./SaranDSEdit.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./form";
import { config } from "../../../../config";
const SaranDSEdit = ({ Id, setShowEdit, ShowEdit, setMsg }) => {
  const id = Id;

  const [Name, setInName] = useState("");
  const [Email, setInEmail] = useState("");
  const [Alamat, setInAlamat] = useState("");
  const [Pesan, setInPesan] = useState("");

  useEffect(() => {
    getSaranById();
  }, []);

  const getSaranById = async () => {
    const response = await axios.get(`${config.api_host_dev}/saran/${id}`);
    setInName(response.data.data.name);
    setInEmail(response.data.data.email);
    setInAlamat(response.data.data.alamat);
    setInPesan(response.data.data.pesan);
  };
  const hendelSudmitPEsan = async (e) => {
    try {
      await axios.patch(`${config.api_host_dev}/saran/${id}`, {
        name: Name,
        email: Email,
        alamat: Alamat,
        pesan: Pesan,
      });
      setMsg("successfully");
    } catch (error) {
      setMsg("edit gagal", error);
    }
  };

  const layout = !ShowEdit && "none";
  return (
    <div className="content-sr " style={{ display: layout }}>
      <div className="row-sr">
        <Form
          hendelSudmitPEsan={hendelSudmitPEsan}
          setInName={setInName}
          setInAlamat={setInAlamat}
          setInEmail={setInEmail}
          setInPesan={setInPesan}
          setShowEdit={setShowEdit}
          Email={Email}
          Name={Name}
          Pesan={Pesan}
          Alamat={Alamat}
        />
      </div>
    </div>
  );
};

export default SaranDSEdit;
