import axios from "axios";
import "./produsctadmin.css";
import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import CardProdcut from "./CardProdcut";
import { config } from "../../../../config";

const Productadmin = ({ hendelIdProdact, edit, setEdit, open, setMsg }) => {
  const [products, setPoroducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    try {
      const Products = await axios.get(`${config.api_host_dev}/products`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setPoroducts(Products.data.data);
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  const deletProducts = async (id) => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    if (window.confirm("Anda yakin ingin menghapus produk ini?")) {
      try {
        const Data = await axios.delete(`${config.api_host_dev}/products/${id}`,{
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setMsg(Data.data.message);
        getProducts();
      } catch (error) {
        setMsg("Gagal menghapus produk.", error)
      }
    } else {
      // Jika pengguna membatalkan penghapusan
      alert("Penghapusan produk dibatalkan.");
    }
  };
  const hendelEditProdact = (id) => {
    !open && setEdit(!edit);
    hendelIdProdact(id);
  };
  const widthContainer = open || edit ? "widthadmin":"adminProduts";
  return (
    <div className={widthContainer}>
      {products.map((item,index) => {
        return (
          <CardProdcut
          index={index}
            item={item}
            hendelEditProdact={hendelEditProdact}
            deletProducts={deletProducts}
          />
        );
      })}
    </div>
  );
};

export default Productadmin;
