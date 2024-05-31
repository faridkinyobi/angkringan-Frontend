import React from "react";
import Geo from "../../img/Picture2.jpg"
import "./geografis.css"
const GeografisDesa = () => {
  return (
    <div className="geografis">
      <h3>Wilayah</h3>
      <h1>Menggambarkan Wilayah Geografis Desa </h1>
      <div className="img-geo">
        <img src={Geo} alt="s" />
        <p>
          Berdasarkan aspek geografis, desa Cangkol memiliki lokasi yang sangat
          potensial dan dilewati moda transportasi antar kota. Desa Cangkol
          merupakan penghubung antara Kabupaten Sukoharjo, Kabupaten Karanganyar
          dan Kota Surakarta. Desa Cangkol termasuk dalam Bagian Wilayah
          Kecamatan I (BWK I) yang berfungsi sebagai kawasan Permukiman,
          Pertanian, Industri Batik, Perdagangan dan Jasa.{" "}
        </p>
      </div>
    </div>
  );
};

export default GeografisDesa;
