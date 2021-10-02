import "./cards.scss";
import Card from "../Card/Card";
import { cards } from "../../constants";

export default function Cards() {
  return (
    <div className="Cards">
      {cards.map(card => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  );
}
