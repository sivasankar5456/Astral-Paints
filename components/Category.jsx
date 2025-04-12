import Image from "next/image";
import Button from "./Button";
import CategoryCard from "./CategoryCard";

export const Category = ({ data }) => {
  const cardData = data?.categories
    ? data?.categories
    : [
        {
          image: { node: { sourceUrl: "/images/Rectangle 52.jpg" } },
          title: "Interior Paints",
        },
        {
          image: { node: { sourceUrl: "/images/Mask group.jpg" } },
          title: "Exterior Paints",
        },
        {
          image: { node: { sourceUrl: "/images/Mask group.jpg" } },
          title: "Water Proofing",
        },
        {
          image: { node: { sourceUrl: "/images/Mask group (1).jpg" } },
          title: "Undercoats",
        },
        {
          image: { node: { sourceUrl: "/images/Rectangle 64.jpg" } },
          title: "Painting Tools",
        },
      ];
  const mapData = cardData?.filter((val, i) => i !== 0);

  return (
    <div className="category-component">
      <div className="about-text-wrapper">
        <p className="about-title">Category</p>

        <div className="heading-wrapper">
          <h1 className="heading">
            {data?.homeCategoryTitle
              ? data?.homeCategoryTitle
              : `Wide Ragnge Of Colours`}
          </h1>
          <Image
            src="/images/Group-orange.png"
            alt="Image side line"
            height={10}
            width={157}
          />
        </div>
      </div>
      <div className="category-all-images-wrapper">
        <div className="category-image-container">
          <Image
            src={cardData[0]?.image?.node?.sourceUrl}
            alt="category image"
            height={522}
            width={612}
          />
          <div className="category-image-text-container">
            <h3>{cardData[0]?.title}</h3>
            <Button title="Read More" style={{ color: "#FF9119" }} />
          </div>
        </div>
        <div className="category-group-card-wrapper">
          {mapData?.map((item, i) => {
            return <CategoryCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
