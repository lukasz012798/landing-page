import "./infoCard.scss";

export default function InfoCard({ data }) {
  return (
    <div className="InfoCard">
      <div className="imgContainer">
        <img src={data.photo} alt="" />
        <div className="rectangle"></div>
      </div>
      <div className="textContainer">
        <h3>{data.title}</h3>
        <span>{data.desc}</span>
        <a href="#home">Find out more</a>
      </div>
    </div>
  );
}
