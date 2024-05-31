import { React, useState } from "react";
import "./dasbord.css";
import NavbarAdmin from "../navbarAdmin/nabarAdmin";
import Productadmin from "../components/dsproduct/productadmin";
import Inproducts from "../components/InProdutDS/InProductsDS";
import ProductsDSEdit from "../components/ProdutDSEdit/ProductsDSEdit";
import { Navigate } from "react-router-dom";

const DasbordProduct = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const [msg, setMsg] = useState(false);
  const [Id, setId] = useState(null);

  setTimeout(() => {
    setMsg(false);
  }, 4000);

  const hendelIdProdact = (id) => {
    setId(id);
  };

  const hendel = () => {
    !edit && setOpen(!open);
  };
  const Token = localStorage.getItem("token");
  if (!Token) return <Navigate to="/login" replace={true} />;

  const layoutAdd = open || edit ? "closeInput" : "";
  return (
    <div className="Dasbord_Prodact">
      <NavbarAdmin />
      <button
        className="buttonProdact"
        onClick={hendel}
        style={{ background: open ? "red" : "" }}
      >
        {open ? "Close" : "Add"}
      </button>
      { setTimeout && (
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
      <div className={layoutAdd}>
        <Productadmin
          hendelIdProdact={hendelIdProdact}
          setId={setId}
          setEdit={setEdit}
          edit={edit}
          Id={Id}
          open={open}
          setOpen={setOpen}
          setMsg={setMsg}
        />
        {open && (
          <Inproducts
            setOpen={() => setOpen(!open)}
            open={open}
            edit={edit}
            setMsg={setMsg}
          />
        )}
        {edit && (
          <ProductsDSEdit
            onClick={() => setEdit(!edit)}
            Id={Id}
            setMsg={setMsg}
          />
        )}
      </div>
    </div>
  );
};

export default DasbordProduct;
