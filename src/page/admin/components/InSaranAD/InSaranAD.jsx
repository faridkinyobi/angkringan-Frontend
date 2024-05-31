import React from "react";
import "./InSaranAD.css";
import axios from "axios";
import { useState } from "react";
import Form from "./form";
import { config } from "../../../../config";
const InSaraAD = ({ setShowAdd, Showadd, setmessage }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    alamat: '',
    pesan: '',
  });

  const hendelChang = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const hendelSaran = async (e) => {
    e.preventDefault();
    try {
      const date = await axios.post(`${config.api_host_dev}/saran`, {
        name: form.name,
        email: form.email,
        alamat: form.alamat,
        pesan: form.pesan,
      });
      setTimeout(() => {
        // Simulasikan berhasil menyimpan data
        setmessage(date.data.message);
        if (setmessage) {
          window.location.reload();
        }
      }, 1000);
    } catch (error) {
      setmessage(error);
    }
  };

  const layout = Showadd ? "flex" : "";

  return (
    <div className="content-srIN " style={{ display: layout }}>
      <div className="row-sr">
        <Form form={form} hendelChang={hendelChang} hendelSaran={hendelSaran} setShowAdd={setShowAdd}  />
      </div>
    </div>
  );
};

export default InSaraAD;
