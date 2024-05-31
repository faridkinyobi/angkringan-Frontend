import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const CardUser = ({ item, hendelEditUser, deleteUser, index, username }) => {
  // console.log(username === item.name);
  // console.log(username, item.name);
  return (
    <div className="cardUser" key={index.id}>
      <FontAwesomeIcon icon={faUser} className="UserIcon" />
      <div className="CardDesc">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
      </div>
      <div
        style={{
          textAlign: "right",
          paddingRight: "2rem",
          fontSize: "2.1rem",
        }}
      >
        {username === item.name && (
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => hendelEditUser()}
            style={{ marginRight: "1rem" }}
          />
        )}
        <FontAwesomeIcon icon={faTrash} onClick={(e) => deleteUser(item.id)} />
      </div>
    </div>
  );
};
export default CardUser;
