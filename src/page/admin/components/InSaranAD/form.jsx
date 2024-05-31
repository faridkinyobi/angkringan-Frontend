import { Button } from "../../../../componen/button/Button";
import { Input } from "../../../../componen/input/Input";
import "./InSaranAD.css";
const Form = ({ form, hendelChang, hendelSaran, setShowAdd }) => {
  return (
    <form onSubmit={hendelSaran} method="POST">
      <h1 className="textH1"> add saran dan kesan</h1>
      <div className="inputbox-srIn">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          placeholder="Nama"
          name="name"
          value={form.name}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox-srIn">
        <label htmlFor="harga">Email</label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox-srIn">
        <label htmlFor="harga">Alamat</label>
        <Input
          type="text"
          placeholder="Alamat"
          name="alamat"
          value={form.alamat}
          onChange={hendelChang}
        />
      </div>
      <div className="inputbox-srIn">
        <label htmlFor="jenis">Pesan</label>
        <Input
          className="csaranIn"
          type="text"
          placeholder="pensan"
          name="pesan"
          value={form.pesan}
          onChange={hendelChang}
        />
      </div>
      <Button
        onClick={setShowAdd && hendelSaran}
        className="srIn-button"
      >
        Save
      </Button>
    </form>
  );
};
export default Form;
