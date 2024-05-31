import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import './produsctadmin.css'
import { config } from "../../../../config";

const CardProdcut = ({item,hendelEditProdact,deletProducts,handleCheckbox,index}) => {
  return (
    <div className="crdadmin"key={index}>
      <img
        style={{
          width: "100%",
          borderRadius: "1rem 1rem 0 0",
          height: "25vh",
        }}
        src={`${config.api_host_dev}/foto/${item.foto}`}
        alt={item.name}
      />
      <div className="desc">
        <h2>{item.name}</h2>
        <p>{item.harga}</p>
        <p>{item.jenis}</p>
      </div>
      <div
        style={{
          textAlign: "right",
          paddingRight: "2rem",
          fontSize: "2.1rem",
        }}
      >
        <FontAwesomeIcon
          icon={faEdit}
          onClick={() => hendelEditProdact(item.id)}
          style={{ marginRight: "1rem" }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deletProducts(item.id)}
        />
      </div>
    </div>
  );
};
export default CardProdcut