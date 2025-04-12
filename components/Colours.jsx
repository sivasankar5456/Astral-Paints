"use client";
import React, { useState } from "react";
import Image from "next/image";
import ColoursCard from "./ColoursCard";

const colorData = [
  { name: "Beige", code: "#FAE1B6" },
  { name: "Peach", code: "#FAC8C3" },
  { name: "Sky Blue", code: "#00CFE8" },
  { name: "Royal Blue", code: "#0057B8" },
  { name: "Maroon", code: "#7B0000" },
  { name: "Mustard", code: "#F2A100" },
];
const Colours = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="colours-component">
      <div className="about-text-wrapper">
        <p className="about-title">
          {data?.homeColoursSubtitle ? data?.homeColoursSubtitle : `Colours`}
        </p>

        <div className="heading-wrapper">
          <h1 className="heading">
            {data?.homeColoursTitle
              ? data?.homeColoursTitle
              : `Popular Colours`}
          </h1>
          <Image
            src="/images/Group-green.png"
            alt="Image side line"
            height={10}
            width={157}
          />
        </div>
      </div>
      <div className="colours-card-container">
        {colorData?.map((item, i) => {
          return (
            <ColoursCard
              item={item}
              key={i}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colours;
