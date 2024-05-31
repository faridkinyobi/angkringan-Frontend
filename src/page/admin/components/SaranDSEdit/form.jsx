import { Button } from "../../../../componen/button/Button";
import { Input } from "../../../../componen/input/Input";
import "./SaranDSEdit.css";
const Form = ({
  hendelSudmitPEsan,
  setInName,
  setInEmail,
  setInAlamat,
  setInPesan,
  setShowEdit,
  Email,
  Name,
  Pesan,
  Alamat,
}) => {
  return (
    <form onSubmit={hendelSudmitPEsan} encType="multipart/form-data">
      <h1> edit saran dan kesan </h1>
      <div className="inputbox-sr">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          placeholder="Nama"
          name="name"
          value={Name}
          onChange={(e) => setInName(e.target.value)}
        />
      </div>
      <div className="inputbox-sr">
        <label htmlFor="harga">Email</label>
        <Input
          type="email"
          placeholder="Email"
          name="harga"
          value={Email}
          onChange={(e) => setInEmail(e.target.value)}
        />
      </div>
      <div className="inputbox-sr">
        <label htmlFor="harga">Alamat</label>
        <Input
          type="text"
          placeholder="Alamat"
          name="harga"
          value={Alamat}
          onChange={(e) => setInAlamat(e.target.value)}
        />
      </div>
      <div className="inputbox-sr">
        <label htmlFor="jenis">Pesan</label>
        <Input
          className="csaran"
          type="text"
          placeholder="pensan"
          name="jenis"
          value={Pesan}
          onChange={(e) => setInPesan(e.target.value)}
        />
      </div>
      <Button onClick={setShowEdit} className="sr-button">
        Save
      </Button>
    </form>
  );
};
export default Form;
