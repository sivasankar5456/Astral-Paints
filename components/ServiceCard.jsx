import Image from "next/image";
import React from "react";
import Button from "./Button";

const ServiceCard = ({ item }) => {
  return (
    <div className="serivce-card">
      <Image
        src={item.image_url}
        alt="service card image"
        height={385}
        width={385}
        className="service-card-img"
      />
      <div className="serivce-card-text-container">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Button
          title="Read More"
          style={{ color: "#000", fontWeight: "600" }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
