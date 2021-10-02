import Rectangle from "../Rectangle/Rectangle";
import "./reviews.scss";

export default function Reviews() {
  // const moveRect = () => {};

  return (
    <div className="Reviews">
      <div className="left">
        <div className="top">
          <div className="empty"></div>
          <div className="name">
            <Rectangle color={"#ffdad8"} />
          </div>
          <div className="empty2"></div>
        </div>
        <div className="bottom">
          <div className="icon">"</div>
          <div className="review">
            <Rectangle color={"#fef2cc"} />
          </div>
        </div>
      </div>
      <div className="right">
        <Rectangle color={"#ccf5f2"} />
      </div>
    </div>
  );
}
