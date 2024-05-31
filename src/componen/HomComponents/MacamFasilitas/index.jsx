import React from "react";
import { Fasilitas } from "../Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wahana from "../../img/bermain.png";
import meja from "../../img/meja.png";
import "./fasilitas.css"
const MacamFasilitas = () => {
    return (
        <div className="fasil">
        <h3 className="fasil-title">fasilitas</h3>
        <h1 className="fasil-desc">Beberapa Macam Fasilitas</h1>
        <div className="fasil-card">
          {Fasilitas.map((item,index)=>{
            return(  
          <div className="fasil-box" key={index}>
            <FontAwesomeIcon icon={item.icon} className={item.class} />
            <h1>{item.title}</h1>
            <p>
              {item.desc}
            </p>
          </div>
            )
          })}
          <div className="fasil-box">
            <img src={meja} alt="wahana" className="fasil-img" />
            <h1>Tempat Duduk</h1>
            <p>
            demi kenyamanan Tempat duduk dua opsi yang di sediakan yaitu lesehan dan dikursi
            </p>
          </div>
          <div className="fasil-box">
            <img src={wahana} alt="wahana" className="fasil-img" />
            <h1>Wahana Bermain</h1>
            <p>
              Wahana yang bisa di gunakan untuk menghilangkan bosen pada anak,
              Wahana ini ada di setiap malam ada kecuali kalau hujan.
            </p>
          </div>
        </div>
      </div>
    );
};

export default MacamFasilitas;
