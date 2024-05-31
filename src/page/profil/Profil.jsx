//import lokasi from  '../../componen/img/esteh.jpg'
import "./profil.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from 'react-slick'
const Profil = () => {
  return (
    <div className="app-profil">
      <div className="title-pro">
        <h1>Profil Pojok Bambu</h1>
      </div>
      <div className="profil">
        <h1>Profil</h1>
        <p>
          Angkringan “Pojok Bambu” merupakan bentuk usaha yang bergerak di dunia
          perkulineran nasi bungkus 2000an. Disamping itu Angkringan “Pojok
          Bambu” juga menjadi suplier makanan ke beberapa usaha yang sama. Usaha
          ini didirikan pada tahun 2014 oleh Bapak Hananto, Winarno, dan
          Budiarso yang secara bersama mengelola sekaligus ownernya.{" "}
        </p>
      </div>
      <div className="asal-usul">
        <h1>Asal Usul</h1>
        <p>
          Asal mula usaha ini merupakan pemberdayaan warga Desa Cangkol yang
          tidak/belum mampu menyewa tempat yang disediakan oleh Pemerintah Desa
          Cangkol. Angkringan “Pojok Bambu” merupakan salah satu Sub Unit dari
          Wisata Kuliner Desa Cangkol dibawah binaan Badan Usaha Milik Desa
          (BUMDes) Desa Cangkol yang bertujuan menggelola produk dari warga
          dengan menyediakan tempat dan pengelola dengan sistem titip laku
          bayar.
        </p>
      </div>
      <div className="vimi">
        <h1 className="vimi-title">Visi&Misi</h1>
        <div className="vimi-cont">
          <h3>Visi</h3>
          <p>
            Visi dari Angkringan “Pojok Bambu” adalah Bersama Mensejahterakan
            Usaha Kecil dan Menengah warga disekitar Tempat Usaha.
          </p>
          <h3>Misi</h3>
          <ol type="a">
            <li>
              a. Membangun dan mengembangkan potensi diri dalam mengembangkan
              suatu usaha angkringan sebagai ciri khas potensi desa wisata.
            </li>
            <li>
              b. Menyediakan fasilitas dan mengembangkan menu angkringan dengan
              berbagai menu yang berbeda dengan angkringan yang biasa dan
              diharapkan banyak disukai oleh semua elemen masyarakat.{" "}
            </li>
            <li>
              c. Memberdayakan masyarakat dengan memberikan kesempatan serta
              dukungan kepada seluruh elemen masyarakat supaya mendapatkan
              lapangan pekerjaan.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Profil;
