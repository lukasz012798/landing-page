import "./dropdownMenu.scss";
export default function DropdownMenu({ active, links }) {
  return (
    <div className={`${active ? "DropdownMenu" : "hide"}`}>
      {links.map(link => (
        <div className="item" key={link}>
          {link}
        </div>
      ))}
    </div>
  );
}
