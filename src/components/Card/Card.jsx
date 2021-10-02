import "./card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ card }) {
  return (
    <div className="Card">
      <h3>{card.name}</h3>
      <FontAwesomeIcon icon={card.icon} color="#10cfc0" size="3x" />
      <h4>{card.shortDesc}</h4>
      <span>{card.desc}</span>
    </div>
  );
}
