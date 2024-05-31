import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Form from "./Form";
import "./saranKesan.css"
import { config } from "../../../config";
const SaranKesan = () => {
    const [Date,SetDate] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getSaran();
  }, []);

  const getSaran = async () => {
        const res = await axios.get(`${config.api_host_dev}/saranHome`);
        SetDate(res.data.data);
      };
  return (
    <div className="slid-contain">
      <h2 className="slid-title">Saran dan Kesan Untuk</h2>
      <h1 className="slid-title-decs">Angkringan Pojok bambu</h1>
      <Slider {...settings}>
        {Date.map((item, index) => {
          return <Form index={index} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default SaranKesan;
