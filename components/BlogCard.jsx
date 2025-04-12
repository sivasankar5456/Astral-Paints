import Image from "next/image";

const BlogCard = ({
  item = {
    title: "",
    date: "",
    image_url: "",
  },
}) => {
  return (
    <div className="bolg-card">
      <Image
        src={item.image_url}
        alt="blog card image"
        height={210}
        width={352}
        className="blog-card-image"
      />
      <div className="blog-text-wrapper">
        <span>{item.date}</span>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
