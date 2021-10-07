import "./FAQ.scss";
import { faq } from "../../constants";
import Question from "../Question/Question";
import { useState } from "react";

export default function FAQ() {
  const [data, setData] = useState(faq);

  const handleActiveChange = (index, isActive) => {
    const state = data;
    state[index].isActive = !isActive;
    setData([...state]);
  };

  return (
    <div className="FAQ">
      {data.map((item, index) => (
        <Question
          key={item.q}
          data={item}
          index={index}
          handler={handleActiveChange}
        />
      ))}
    </div>
  );
}
