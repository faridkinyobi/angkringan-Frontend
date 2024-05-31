import axios from "axios";
import "./Saranadmin.css";
import { React, useState, useEffect } from "react";
import CardSaran from "./CardSaran";
import { config } from "../../../../config";
import { Navigate } from "react-router-dom";

const SaranAdmin = ({ setMsg }) => {

  const [masukan, setMasuka] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    getSaran();
  }, []);

  const getSaran = async () => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;

    const Date = await axios.get(`${config.api_host_dev}/saran`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    setMasuka(Date.data.data);
  };

  const HendelDalet = async (id) => {
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    if (window.confirm("Anda yakin ingin menghapus produk ini?")) {
      try {
        const delet = await axios.delete(`${config.api_host_dev}/saran/${id}`, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        setMsg(delet.data.message);
        getSaran(); // Ini akan mengambil data baru setelah penghapusan
      } catch (error) {
        // Tangani kesalahan jika ada
        setMsg(error.response.data.message);
      }
    } else {
      // Jika pengguna membatalkan penghapusan
      alert("Penghapusan produk dibatalkan.");
    }
  };

  const handleCheckboxChange = async (Id) => {
    
    const Token = localStorage.getItem("token");
    if (!Token) return <Navigate to="/login" replace={true} />;
    try {
      const Date = await axios.post(`${config.api_host_dev}/saran/${Id}`, {
        headers: {
          Authorization: `Bearer${Token}`,
        },
      });
      setMsg(Date.data.message);
      const updatedSaran = Date.data;

      // Perbarui Data dengan mengganti status di dalam state
      setMasuka((prevSaranList) =>
        prevSaranList.map((saran) =>
          saran.id === updatedSaran.id ? updatedSaran : saran
        )
      );

      setSelectedItems((prevSelectedItems) => {
        //merubah status nama yang dikirim dari check box true atau false
        const updatedSelectedItems = {
          ...prevSelectedItems,
          [Id]: !prevSelectedItems[Id],
        };
        return updatedSelectedItems;
      });
      setTimeout(()=>{
        window.location.reload();
      })
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  // const widthContainer = Showadd || ShowEdit ? "70%" : "100%";
  return (
    <div className="DsSaran">
      {masukan.map((item, index) => {
        return (
          <CardSaran
            item={item}
            // hendelEdit={hendelEdit}
            HendelDalet={HendelDalet}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
            selectedItems={selectedItems}
          />
        );
      })}
    </div>
  );
};

export default SaranAdmin;
