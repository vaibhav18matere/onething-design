import { useState } from "react";

export default function Accordian({ title, text, index }) {
  const [selectedIndex, setSelectedIndex] = useState({});
  const handleBtnClick = (index) => {
    setSelectedIndex((prevState) => ({ [index]: !prevState[index] }));
  };
  const isActive = selectedIndex[index];
  return (
    <>
      {index !== 0 && <hr />}
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={() => handleBtnClick(index)}
      >
        {title}
      </button>
      <hr />
      {isActive && (
        <div className="panel">
          <p>{text}</p>
        </div>
      )}
    </>
  );
}
