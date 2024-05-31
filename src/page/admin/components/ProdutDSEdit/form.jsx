import { Button } from "../../../../componen/button/Button";
import { Input } from "../../../../componen/input/Input";
import { config } from "../../../../config";
import "./ProductsDSEdit.css";
import { useState,useEffect } from "react";

const Form = ({
  hendelSudmitPro,
  inName,
  setInname,
  loadImage,
  Preview,
  inHarga,
  setInharga,
  inJenis,
  setInjenis
}) => {
  const [showFullPreview, setShowFullPreview] = useState(false)

  useEffect(() => {
    setShowFullPreview(!showFullPreview);
  }, [Preview]);

  return (
    
    <form
      // onSubmit={hendelSudmitPro}
      className="fromEDit"
    >
      <h1 className="h1"> edit produk</h1>
      <div className="inputbox-edit">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Nama"
          name="name"
          value={inName}
          onChange={(e) => setInname(e.target.value)}
        />
      </div>
      <div className="inputbox-edit">
        <label htmlFor="email">foto</label>
        <input style={{border:"none"}} type="file" onChange={loadImage} />
        {Preview && (
          <figure>
            <img
            className="imagPreview"
              src={showFullPreview ? Preview : `${config.api_host_dev}/foto/${Preview}`}
              alt="preview image"
            />
          </figure>
        ) }
      </div>
      <div className="inputbox-edit">
        <label htmlFor="harga">harga</label>
        <input
          type="number"
          placeholder="harga"
          name="harga"
          value={inHarga}
          onChange={(e) => setInharga(e.target.value)}
        />
      </div>
      <div className="inputbox-edit">
        <label htmlFor="jenis">jenis</label>
        <Input
        type="text"
        placeholder="harga"
        name="jeni"
        value={inJenis}
        onChange={(e) => setInjenis(e.target.value)}
        />
      </div>
      <Button onClick={ hendelSudmitPro} type="submit" className="edit-button">
        Save
      </Button>
    </form>
  );
};
export default Form;
