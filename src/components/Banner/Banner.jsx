import Button from "../Button/Button";
import "./banner.scss";

export default function Banner({ children, buttonTxt, triangleColor }) {
  return (
    <div className="Banner">
      <h1>{children}</h1>
      <Button title={buttonTxt} />
      <div
        className="triangle"
        style={{ borderTop: `120px solid #${triangleColor}` }}
      ></div>
    </div>
  );
}
