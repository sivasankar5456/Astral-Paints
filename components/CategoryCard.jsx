import Image from "next/image";
import React from "react";

const CategoryCard = ({ item }) => {
  // console.log(item)
  return (
    <div className="category-card">
      <Image
        src={item.image?.node?.sourceUrl}
        alt="category-card-image"
        height={251}
        width={265}
      />
      <h3>{item.title}</h3>
    </div>
  );
};

export default CategoryCard;
