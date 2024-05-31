import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Saranadmin.css";

const CardSaran = ({
  item,
  HendelDalet,
  index,
  handleCheckboxChange,
  selectedItems,
}) => {
  const Status = selectedItems[item.id] || item.status;
  return (
    <div className="cradSaran" key={index.id}>
        <FontAwesomeIcon icon={faUser} className="iconSaran" />
      <div className="SaranText">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
        <p>Almat : {item.alamat}</p>
        <p>pesan : {item.pesan}</p>
      </div>
      <div className="tombol">
        <input
          style={{marginRight:"1rem",cursor:"pointer",width:"1.5rem",height: "1.5rem"}}
          type="checkbox"
          checked={Status}
          onChange={(e) => handleCheckboxChange(item.id)}
        />
        <FontAwesomeIcon style={{fontSize: "2rem"}} icon={faTrash} onClick={(e) => HendelDalet(item.id)} />
      </div>
    </div>
  );
};
export default CardSaran;
