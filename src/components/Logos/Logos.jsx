import "./logos.scss";
import { logos } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logos() {
  return (
    <div className="Logos">
      {logos.map((logo, index) => (
        <FontAwesomeIcon
          key={`${index}_logo`}
          icon={logo}
          size={"4x"}
          color={"#585c5c"}
        />
      ))}
    </div>
  );
}
