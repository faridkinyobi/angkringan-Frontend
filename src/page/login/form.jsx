import { Button } from "../../componen/button/Button";
import { Input } from "../../componen/input/Input";
import "./login.css";
const Form = ({ form, hendelChang, hendelSubmite }) => {
  return (
    <form onSubmit={hendelSubmite}>
      <div className="input-login">
        <label htmlFor="password">Email</label>
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={hendelChang}
        />
      </div>
      <div className="input-login">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={hendelChang}
        />
      </div>
      <Button className="login-buton">Login</Button>
    </form>
  );
};
export default Form;
