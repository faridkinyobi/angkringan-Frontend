import React, { useState } from "react";
import './register.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./form"
import { config } from "../../config";

const Register = ()=>{
    const [form, setForm]= useState({
        name:"",
        email:"",
        password:"",
        confpassword:""
    })
    const hendelChang =(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const [msg,setMsg]= useState("")

    const navigate= useNavigate()
    const Register= async(e)=>{
        e.preventDefault()
        const Token = localStorage.getItem("token");
        try {
            const data=await axios.post(`${config.api_host_dev}/register`,{
                name:form.name,
                email:form.email,
                password:form.password,
                confpassword:form.confpassword
            },{
                headers: {
                  Authorization: `Bearer ${Token}`,
                },
              })
              setMsg(data.data.message)
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.message)
            }
            navigate("/login")
        }
    }
    return(
        <div className="main-regis">
            <div className="row-regis">
                <p className="nottif">{msg}</p>
                <h1>Registrasi</h1>
                <Form form={form} hendelChang={hendelChang} Register={Register}/>
            </div>
        </div>
    )
}

export default Register