import "./infoCards.scss";
import { infoCards } from "../../constants";
import InfoCard from "../InfoCard/InfoCard";

export default function InfoCards() {
  return (
    <div className="InfoCards">
      {infoCards.map(infoCard => (
        <InfoCard key={infoCard.title} data={infoCard} />
      ))}
    </div>
  );
}
