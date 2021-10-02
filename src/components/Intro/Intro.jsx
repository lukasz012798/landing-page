import "./intro.scss";
import Button from "../Button/Button";
import video1 from "../../assets/video.mp4";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="container">
        <div className="left">
          <h1>Become a Deliveroo partner</h1>
          <span>
            Reach more customers with your brand. Sign up today, for a sales
            boost of up to 30%.
          </span>
          <Button title="Create account" />
        </div>
        <div className="right">
          <div className="videoContainer">
            <div className="rectangle"></div>
            <video autoPlay loop muted width={550} height={350}>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="rect rect1"></div>
      <div className="rect rect2"></div>
    </div>
  );
}
