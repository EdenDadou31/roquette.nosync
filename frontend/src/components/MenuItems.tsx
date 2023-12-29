import { useState } from "react";
import "./../styles/App.scss";
import Button from "./Button";

interface IMenuItemsProps {
  item: any;
}

function MenuItems({ item }: IMenuItemsProps) {
  const [showMenuItem, setShowMenuItem] = useState<number | undefined>();

  const { title, color, desc, cta1, cta2, submenu } = item.attributes;

  return (
    <div className="menu-items-container">
      <div
        className="menu-button"
        style={{
          borderTop: `2px solid ${color}`,
          backgroundColor: showMenuItem === item.id ? color : "#f5f7f9",
          color: showMenuItem === item.id ? "white" : "#2c5581",
        }}
        onMouseEnter={() => setShowMenuItem(item.id)}
        onMouseLeave={() => setShowMenuItem(undefined)}
      >
        <h2>{title}</h2>
      </div>
      {showMenuItem === item.id ? (
        <div
          className="menu-content"
          style={{ backgroundColor: color }}
          onMouseEnter={() => setShowMenuItem(item.id)}
          onMouseLeave={() => setShowMenuItem(undefined)}
        >
          <div className="left-part">
            <p>{title}</p>
            <span>{desc}</span>
            <div className="cta-container">
              <Button color="#2d5481" label={cta1.label} />
              <Button color="white" textColor="#2d5481" label={cta2.label} />
            </div>
          </div>
          <div className="right-part">
            <ul className="submenu-container">
              {submenu?.map((sublink: any) => (
                <li>{sublink.element.label}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MenuItems;
