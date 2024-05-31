import React from "react";
import "./InProductsDS.css";
import axios from "axios";
import { useState } from "react";
import Form from "./form";
import { Navigate } from "react-router-dom";
import { config } from "../../../../config";

const InProductsDS = ({ setOpen, open, edit,setMsg }) => {
  const [inName, setInname] = useState("");
  const [inFoto, setInfoto] = useState("");
  const [inHarga, setInharga] = useState("");
  const [inJenis, setInjenis] = useState("");
  const [Preview, setPreview] = useState("");


  const loadImage = (e) => {
    const image = e.target.files[0];
    if(image){
      if(image.size > 500*1024 ){
        setMsg("File melebihi 1MB")
        setInfoto(null)
      }else{
        setInfoto(image);
        setPreview(URL.createObjectURL(image));
      }
    }
  };

  const hendelSudmitPro = async (e) => {
    e.preventDefault()
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    const formData = new FormData();
    formData.append("name", inName);
    formData.append("foto", inFoto);
    formData.append("harga", inHarga);
    formData.append("jenis", inJenis);
    try {
      const inData =await axios.post(`${config.api_host_dev}/products`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        }
      },
      )
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      setMsg(inData.data.message)
    } catch (error) {
      setMsg(error.response.data.message)
    }
  };

  const layout = open ? "flex" : "";
  return (
    <div className="content-add" style={{ display: layout }}>
      <div className="row-add">
        <Form
          setInharga={setInharga}
          setInjenis={setInjenis}
          setInname={setInname}
          setOpen={setOpen}
          hendelSudmitPro={hendelSudmitPro}
          loadImage={loadImage}
          Preview={Preview}
        />
      </div>
    </div>
  );
};

export default InProductsDS;
