import { useCallback, useEffect, useState } from "react";

import "./reviews.scss";

import { handleRefresh } from "../../functions";

import Rectangle from "../Rectangle/Rectangle";

export default function Reviews() {
  const [review, setReview] = useState({
    name: "",
    review: "",
    signature: "",
    img: "",
  });

  const refresh = useCallback(() => handleRefresh(setReview), []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div className="Reviews">
      <div className="left">
        <div className="top">
          <div className="empty"></div>
          <div className="name">
            {review.name}
            <Rectangle color={"#ffdad8"} />
          </div>
          <div className="empty2"></div>
        </div>
        <div className="bottom">
          <div className="icon">"</div>
          <div className="review">
            {review.review}
            <br />
            <br />
            {review.signature}
            <Rectangle color={"#fef2cc"} />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={review.img} alt="" />
        <Rectangle color={"#ccf5f2"} />
      </div>
    </div>
  );
}
