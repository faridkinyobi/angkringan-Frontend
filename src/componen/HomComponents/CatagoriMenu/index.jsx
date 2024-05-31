import React from "react";
import { Categori } from "../Date";
import "./catagorimenu.css"
const CatagoriMenu = () => {
    return (
        <div className="menu">
        <h3 className="menu-title">categori</h3>
        <h1 className="menu-desc">Beberapa Categori Menu</h1>
        <div className="card">
          {Categori.map((item, index)=>{
            return(
            <div className='menu-card' key={index}>
              <img src={item.img} alt={item.alt} className='menu-card-img' />
              <h3>{item.title}</h3>
            </div>
            )
          })}
        </div>
      </div>
    );
};

export default CatagoriMenu;
