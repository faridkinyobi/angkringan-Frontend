import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import "./KesanSaran.css";
const FormKesanSaran = ({ form, hendelChang, hendelSaran}) => {
  return (
    <form onSubmit={hendelSaran} method="POST">
      <h1 className="textH1"> add saran dan kesan</h1>
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          placeholder="Nama"
          name="name"
          value={form.name}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox">
        <label htmlFor="harga">Email</label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox">
        <label htmlFor="harga">Alamat</label>
        <Input
          type="text"
          placeholder="Alamat"
          name="alamat"
          value={form.alamat}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox">
        <label htmlFor="jenis">Pesan</label>
        <Input
          className="csaran"
          type="text"
          placeholder="pensan"
          name="pesan"
          value={form.pesan}
          onChange={hendelChang}
        />
      </div>
      <Button
        onClick={hendelSaran}
        className="in-button"
      >
        Save
      </Button>
    </form>
  );
};
export default FormKesanSaran;
