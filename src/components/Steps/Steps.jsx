import {
  faStoreAlt,
  faCalendarAlt,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./steps.scss";
import H1 from "../H1/H1";

export default function Steps() {
  return (
    <div className="Steps">
      <div className="left">
        <H1>Sign up</H1>
        <FontAwesomeIcon icon={faStoreAlt} size="4x" color="#10cfc0" />
        <span>Partner with Deliveroo and tell us about your business</span>
      </div>
      <div className="center">
        <H1>Set up</H1>
        <FontAwesomeIcon icon={faCalendarAlt} size="4x" color="#10cfc0" />
        <span>
          Upload a menu, schedule your photoshoot and if you need one we'll ship
          your tablet
        </span>
      </div>
      <div className="right">
        <H1>Sell</H1>
        <FontAwesomeIcon icon={faTablet} size="4x" color="#10cfc0" />
        <span>
          Switch on your tablet, and start tracking orders via{" "}
          <a href="#home">Restaurant Hub</a>
        </span>
      </div>
    </div>
  );
}
