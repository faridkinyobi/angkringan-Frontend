import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const MybarShow=({children})=>{

    const loction = useLocation()
    const [showNavbar, setShowNavar]= useState(false)
    useEffect(()=>{
        console.log('this is lokation',loction)
        if(loction.pathname ==='/login'||loction.pathname ==='/dashboardProdct'||loction.pathname ==='/saran'||loction.pathname ==='/registrasi'||loction.pathname ==='/user'){
            setShowNavar(false)
        }else{
            setShowNavar(true)
        }
    },[loction])
    return(
        <div>{showNavbar && children}</div>
    )
}
export default MybarShow