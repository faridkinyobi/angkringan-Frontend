import { React } from "react";
import "./home.css";
import IMG from "../../componen/img/4 icoon.png";
import instragram from "../../componen/img/instragram.png";
import facebook from "../../componen/img/facebook.png";
import youtube from "../../componen/img/youtube.png";
import twiter from "../../componen/img/twiter.png";
import GeografisDesa from "../../componen/HomComponents/GeografisDesa";
import CatagoriMenu from "../../componen/HomComponents/CatagoriMenu";
import MacamFasilitas from "../../componen/HomComponents/MacamFasilitas";
import SaranKesan from "../../componen/HomComponents/Sarankesan/Index";

const Home = () => {
  return (
    <div className="home">
      <div className="app">
        <div className="app-contain">
          <h1>
            ANGKRINGAN <li></li>
            <span>POJOK BAMBU</span>
          </h1>
          <p>
            Rajanya nasi bungkus 
            <span>2000-An</span>
          </p>
          <div className="imglink">
            <a  href=""><img className="img" src={facebook} alt="instragram" /></a>
            <a  href=""><img className="img" src={instragram} alt="instragram" /></a>
            <a  href=""><img className="img" src={youtube} alt="instragram" /></a>
            <a  href=""><img className="img" src={twiter} alt="instragram" /></a>
          </div>
          
        </div>
        <img  rel="preload"   fetchpriority="high"  className="imgPro" src={IMG} alt="satu" />
      </div>

      {/* Menu */}
      <CatagoriMenu />
      {/* Batas Menu */}

      {/* letak georafis */}
      <GeografisDesa />
      {/* batas letas */}

      {/* fasilitas */}
      <MacamFasilitas />
      {/* slid */}
      <SaranKesan />
    </div>
  );
};

export default Home;
