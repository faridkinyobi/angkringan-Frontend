import { Button } from "../../../../componen/button/Button";
import { Input } from "../../../../componen/input/Input";
import "./InProductsDS.css";
const Form = ({
  setInharga,
  setInjenis,
  setInname,
  loadImage,
  hendelSudmitPro,
  setOpen,
  Preview,
}) => {
  return (
    <form
      className="form-add">
      <h1 className="h1"> add produk</h1>
      <div className="inputbox-add">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          placeholder="Nama"
          name="name"
          onChange={(e) => setInname(e.target.value)}
        />
      </div>
      <div className="inputbox-add">
        <label htmlFor="file">foto</label>
        <Input style={{border:"none"}}  type="file" onChange={loadImage} />
        {Preview && (
          <figure>
            <img src={Preview} alt="preview image"  style={{maxWidth:"18vh"}} />
          </figure>
        ) }
      </div>
      <div className="inputbox-add">
        <label htmlFor="harga">harga</label>
        <Input
          type="number"
          placeholder="harga"
          name="harga"
          onChange={(e) => setInharga(e.target.value)}
        />
      </div>
      <div className="inputbox-add">
        <label htmlFor="jenis">jenis</label>
        <Input
          type="text"
          placeholder="jenis"
          name="jenis"
          onChange={(e) => setInjenis(e.target.value)}
        />
      </div>
      <Button onClick={setOpen && hendelSudmitPro} type="submit" className="in-button">
        Save
      </Button>
    </form>
  );
};
export default Form;
