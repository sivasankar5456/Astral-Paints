import React from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const serviceCard_data = [
  {
    id: 1,
    title: "Wall Painting",
    description: "lorem ipsum dolor sit amet consectetur.",
    image_url: "/images/Mask group (2).png",
  },
  {
    id: 2,
    title: "Water Solution",
    description: "lorem ipsum dolor sit amet consectetur.",
    image_url: "/images/Rectangle 10.png",
  },
  {
    id: 3,
    title: "Painting",
    description: "lorem ipsum dolor sit amet consectetur.",
    image_url: "/images/Rectangle 9.png",
  },
];

const Service = ({ data }) => {
  return (
    <div className="service-component">
      <div className="common-text-wrapper">
        <p className="common-title">
          {data?.homeServicesSubtitle ? data?.homeServicesSubtitle : `Services`}
        </p>

        <div className="heading-wrapper">
          <h1 className="heading">
            {data?.homeServicesTitle
              ? data?.homeServicesTitle
              : `Make Your Life Comfortable`}
          </h1>
          <Image
            src="/images/Group-orange.png"
            alt="Image side line"
            height={10}
            width={157}
          />
        </div>
      </div>
      <div className="serivce-card-container">
        {serviceCard_data?.map((item) => {
          return <ServiceCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Service;
