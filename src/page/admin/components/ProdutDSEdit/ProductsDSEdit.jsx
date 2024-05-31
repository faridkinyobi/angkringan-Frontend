import React from "react";
import "./ProductsDSEdit.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../../../../config";
import Form from "./form";
import { Navigate } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";

const ProductsDSEdit = ({ Id, edit, setMsg }) => {
  const id = Id;
  const [inName, setInname] = useState("");
  const [inFoto, setInfoto] = useState("");
  const [inHarga, setInharga] = useState("");
  const [inJenis, setInjenis] = useState("");
  const [Preview, setPreview] = useState(false);

  const getProductsById = async () => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    try {
      const response = await axios.get(`${config.api_host_dev}/products/${id}`,{
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const productData = response.data.data;
      setInname(productData.name);
      setInharga(productData.harga);
      setInjenis(productData.jenis);
      setPreview(productData.foto);
    } catch (error) {
      setMsg.error("Error fetching data:", error);
    }
  };
  const loadImage = (e) => {
    const newFile = e.target.files[0];
    setInfoto(newFile); // Menyimpan file gambar yang baru di state
    setPreview(URL.createObjectURL(newFile)); // Menampilkan pratinjau gambar yang baru
  };
  
  useEffect(() => {
    getProductsById();
  }, []);
  
  const formData = new FormData();
  formData.append("name", inName);
  formData.append("foto", inFoto);
  formData.append("harga", inHarga);
  formData.append("jenis", inJenis);

  const hendelSudmitPro = async (e) => {
    e.preventDefault()
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    try {
      const Data = await axios.patch(
        `${config.api_host_dev}/products/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          }
        },
        )
      setMsg(Data.data.message);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  console.log(inJenis)
  // const layout = !edit && "none";
  return (
    <div className="ContentEdit">
      <div className="Editrow">
        <Form
          hendelSudmitPro={hendelSudmitPro}
          inName={inName}
          setInname={setInname}
          loadImage={loadImage}
          Preview={Preview}
          inHarga={inHarga}
          setInharga={setInharga}
          inJenis={inJenis}
          setInjenis={setInjenis}
          setPreview={setPreview}
        />
      </div>
    </div>
  );
};

export default ProductsDSEdit;
