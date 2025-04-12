import React from "react";

const ColoursCard = ({ item, index, activeIndex, setActiveIndex }) => {
  return (
    <div className="color-card" onClick={() => setActiveIndex(index)}>
      <div
        className="color-heading"
        style={{ visibility: activeIndex === index ? "visible" : "hidden" }}
      >
        <span>Astral Paints</span>
      </div>
      <div
        className="color-box-container"
        style={{ border: `solid 5px ${item.code}` }}
      >
        <div
          className="color-box"
          style={{ backgroundColor: `${item.code}` }}
        ></div>
      </div>
      <div
        className="color-footer"
        style={{
          boxShadow:
            activeIndex === index
              ? "0 10px 30px rgba(0, 0, 0, 0.15)"
              : "0 0 0 rgba(0, 0, 0, 0.15)",
        }}
      >
        <p>{item.name}</p>
        <span>{item.code}</span>
      </div>
    </div>
  );
};

export default ColoursCard;
