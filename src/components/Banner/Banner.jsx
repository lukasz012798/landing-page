import Button from "../Button/Button";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="Banner">
      <h1>Crown the winners of the Restaurant Awards 2021</h1>
      <Button title={"Vote now"} />
      <div className="triangle"></div>
    </div>
  );
}
