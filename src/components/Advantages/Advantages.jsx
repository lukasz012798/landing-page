import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./advantages.scss";
import { advListItems } from "../../constants";

export default function Advantages() {
  return (
    <div className="Advantages">
      <h3>Upload your menu and be live on Deliveroo in just 7 days</h3>
      <span>
        We send everything you’ll need to get started - a tablet, a wireless
        printer and up to 20 branded extras to help promote your business.
      </span>
      <ul>
        {advListItems.map(item => (
          <li key={item}>
            <FontAwesomeIcon icon={faCheck} color="#10cfc0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
