import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

const blogCard_data = [
  {
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image_url: "/images/Rectangle 31.png",
  },
  {
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image_url: "/images/Rectangle 79.png",
  },
  {
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image_url: "/images/Rectangle 68.png",
  },
  {
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    image_url: "/images/Rectangle 69.png",
  },
];
const Blog = () => {
  return (
    <div className="blog-component">
      <div className="about-text-wrapper">
        <p className="about-title">Our Blog</p>

        <div className="heading-wrapper">
          <h1 className="heading">Latest</h1>
          <Image
            src="/images/Group-skyblue.png"
            alt="Image side line"
            height={10}
            width={157}
          />
        </div>
      </div>
      <div className="blog-card-wrapper">
        <div className="first">
          <BlogCard item={blogCard_data[0]} />
          <BlogCard item={blogCard_data[1]} />
        </div>
        <div className="second">
          <div className="bolg-image-wrapper">
            <Image
              src={"/images/Rectangle 66.png"}
              alt="blog image"
              height={487}
              width={469}
              className="featured-image"
            />
            <div className="blog-text-wrapper">
              <span>10 Jan 2024</span>
              <p>10 stylish cream colour combination for your home</p>
            </div>
          </div>
        </div>
        <div className="third">
          <BlogCard item={blogCard_data[2]} />
          <BlogCard item={blogCard_data[3]} />
        </div>
      </div>
    </div>
  );
};


export default Blog;
