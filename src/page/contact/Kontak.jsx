import React from "react";
import "./kontak.css";
import KonPro from "../../componen/img/kontak 2.png";
import lokasi from "../../componen/img/locasi.png";
import whatsap from "../../componen/img/whatssap.png";
import email from "../../componen/img/telegram.png";
// import { Button } from "../../componen/button/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormKesanSaran from "../../componen/HomKontaks/InputKesanSaran";
import { config } from "../../config";

const Kontak = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    alamat: "",
    pesan: "",
  });
  const hendelChang = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const hendelSaran = async (e) => {
    e.preventDefault();
    axios.post(`${config.api_host_dev}/saran`, {
      name: form.name,
      email: form.email,
      alamat: form.alamat,
      pesan: form.pesan,
    });
    navigate("/");
  };
  return (
    <div className="Kontak">
      <div className="kontak-pro">
        <h1>
          Informasi <span>Kontak</span>
        </h1>
        <img src={KonPro} alt="" />
      </div>
      <div className="content">
        <h1>Hubungi kami</h1>
        <div className="row">
          <div className="hub">
            <h2>Tidak bisa menemukan <span>informasi</span> yang Anda cari?</h2>
            <div className="hubKontak">
              <img className="imglok" src={lokasi} alt="" />
              <div className="hubkonTtitel">
                <h1>lOKASI</h1>
                <p> Jl. Pemuda, Jepuh, Bekonang, Kec. Mojolaban, Kabupaten Sukoharjo, Jawa Tengah</p>
              </div>
            </div>
            <div className="hubKontak">
              <img src={whatsap} alt="" />
              <div className="hubkonTtitel">
                <h1>Telepon</h1>
                <p> 0878-3683-1675</p>
              </div>
            </div>
            <div className="hubKontak">
              <img src={email} alt="" />
              <div className="hubkonTtitel">
                <h1>Email</h1>
                <p>Pojokbambu@gmail.com</p>
              </div>
            </div>
          </div>
          <FormKesanSaran
            hendelChang={hendelChang}
            hendelSaran={hendelSaran}
            form={form}
          />
        </div>
        <div>
          <iframe
            title="Contact Form"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.37984896642!2d110.85205749362075!3d-7.610572882521911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3d60a70e43b3%3A0x1bb7fe772d1e868d!2sWedangan%20Pojok%20Bambu!5e0!3m2!1sid!2ssg!4v1685596852189!5m2!1sid!2ssg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
