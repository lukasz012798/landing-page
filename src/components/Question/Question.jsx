import "./question.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Question({ data, handler, index }) {
  return (
    <>
      <div className="Question" onClick={() => handler(index, data.isActive)}>
        {data.q}
        <FontAwesomeIcon
          icon={faChevronDown}
          color={"#10cfc0"}
          rotation={data.isActive ? 180 : 0}
        />
      </div>

      <div
        className={`Answer ${data.isActive ? "" : "hideAnswer"}`}
        dangerouslySetInnerHTML={{ __html: data.a }}
      ></div>
    </>
  );
}
