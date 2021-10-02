import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandScissors,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import "./topbar.scss";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Topbar({ menu, setMenu }) {
  const handleDropdown = (index, isActive) => {
    const state = menu;
    if (isActive) {
      state[index].isActive = false;
    } else {
      state.forEach((item, i) => {
        if (index === i) state[i].isActive = true;
        else state[i].isActive = false;
      });
    }
    setMenu([...state]);
  };

  return (
    <div className="Topbar">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faHandScissors} size="3x" rotation={90} />
          deliveroo
        </div>
        <div className="menu">
          <ul>
            {menu.map((item, index) => (
              <li
                onClick={e => {
                  e.stopPropagation();
                  handleDropdown(index, item.isActive);
                }}
                key={item.name}
              >
                {item.name}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color={"#10cfc0"}
                  rotation={item.isActive ? 180 : 0}
                />
                <DropdownMenu active={item.isActive} links={item.links} />
              </li>
            ))}
          </ul>
          <Button title="Become a partner" />
        </div>
      </div>
    </div>
  );
}
