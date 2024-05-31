import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = ({ index, item }) => {
  return (
    <div className="box" key={index}>
      <div className="boxcil">
        <FontAwesomeIcon className="icon" icon={faUser} />
        <div
          style={{ textAlign: "left", marginTop: "1rem", marginLeft: "1rem" }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{item.name}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              marginTop: "1rem",
            }}
          >
            "{item.pesan}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
