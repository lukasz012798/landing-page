import "./stats.scss";
import Map from "../../assets/map.svg";
import Rider from "../../assets/motocross.svg";
import Clock from "../../assets/clock.svg";

export default function Stats() {
  return (
    <div className="Stats">
      <div className="container">
        <div className="left">
          <img src={Map} alt={"Map icon"} />
          <h1>140,000</h1>
          <span>Restaurant and grocery partners</span>
        </div>
        <div className="center">
          <img src={Rider} alt={"Rider icon"} />
          <h1>100,000 +</h1>
          <span>Riders in the UK and overseas</span>
        </div>
        <div className="right">
          <img src={Clock} alt={"Clock icon"} />
          <h1>20 mins</h1>
          <span>Our average delivery time</span>
        </div>
      </div>
      <span id="annotation">Global figures as of August 2021</span>
    </div>
  );
}
