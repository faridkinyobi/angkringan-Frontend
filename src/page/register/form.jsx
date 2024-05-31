import { Button } from "../../componen/button/Button"
import { Input } from "../../componen/input/Input"
import "./register.css"
const Form =({form,hendelChang,Register})=>{
    return(
        <form onSubmit={Register}>
                <div className="input-regis">
                <label htmlFor="name">Name</label>
                    <Input type="text" placeholder="Name" name="name"
                    value={form.name} onChange={hendelChang}/>
                </div>
                <div className="input-regis">
                <label htmlFor="email">Email</label>
                    <Input type="email" placeholder="email" name="email"
                    value={form.email} onChange={hendelChang}/>
                </div>
                <div className="input-regis">
                    <label htmlFor="password">Password</label>
                    <Input type="password" placeholder="masukan password" name="password"
                    value={form.password} onChange={hendelChang}/>
                </div>
                <div className="input-regis">
                    <label htmlFor="password">confirm Password</label>
                    <Input type="password" placeholder="masukan password" name="confpassword"
                    value={form.confpassword} onChange={hendelChang}/>
                </div>
                <Button className='regis-buton'>Register</Button>
            </form>
    )
}
export default Form