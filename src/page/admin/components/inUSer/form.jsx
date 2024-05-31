import { Button } from "../../../../componen/button/Button"
import { Input } from "../../../../componen/input/Input"
import "./UserIn.css"
const Form =({form,hendelChang,hendelAdd, seOpen})=>{
    return(
        <form onSubmit={hendelAdd} className="from-Add">
            <h1 className="h1">Add Admin</h1>
                <div className="input-add">
                <label htmlFor="name">Name</label>
                    <Input type="text" placeholder="Name" name="name"
                    value={form.name} onChange={hendelChang}/>
                </div>
                <div className="input-add">
                <label htmlFor="email">Email</label>
                    <Input type="email" placeholder="email" name="email"
                    value={form.email} onChange={hendelChang}/>
                </div>
                <div className="input-add">
                    <label htmlFor="password">Password</label>
                    <Input type="password" placeholder="masukan password" name="password"
                    value={form.password} onChange={hendelChang}/>
                </div>
                <div className="input-add">
                    <label htmlFor="password">confirm Password</label>
                    <Input type="password" placeholder="masukan password" name="confpassword"
                    value={form.confpassword} onChange={hendelChang}/>
                </div>
                <Button onClick={seOpen} className='add-buton'>Save</Button>
            </form>
    )
}
export default Form