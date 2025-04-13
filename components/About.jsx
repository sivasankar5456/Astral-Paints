import Image from "next/image";
import Button from "./Button";
import { splitParagraphs } from "@/services";

const About = ({
  data = {
    homeAboutTitle: "Bringing Your Dreams to Life",
    homeAboutSubtitle: "About Astral Paints",
    homeAboutButton: null,
    homeAboutDescription: null,
    homeAboutVideoImage: null,
    homeAboutVideoUrl: "",
  },
}) => {
  return (
    <div className="about-component" >
      <div className="common-text-wrapper" style={{paddingTop:'50px',}}  >
        <p className="common-title">{data?.homeAboutSubtitle}</p>

        <div className="heading-wrapper">
          <h1 className="heading">{data?.homeAboutTitle}</h1>
          <Image
            src={"/images/Group.png"}
            alt="Image side line"
            height={10}
            width={157}
          />
        </div>
        <div className="about-text-contianer">
          {splitParagraphs(data?.homeAboutDescription) ? (
            splitParagraphs(data?.homeAboutDescription)?.map((item, i) => (
              <p key={i}>{item}</p>
            ))
          ) : (
            <>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum consectetur perspiciatis facere iure placeat, provident
                id, minima neque voluptatem at reiciendis sunt quaerat, dolore
                temporibus odio eveniet nam quibusdam nobis quos sed.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum consectetur perspiciatis facere iure placeat, provident
                id, minima neque voluptatem at reiciendis sunt quaerat, dolore
                temporibus odio eveniet nam quibusdam nobis quos sed.
              </p>
            </>
          )}
        </div>
        <Button
          title={
            data?.homeAboutButton?.title
              ? data?.homeAboutButton?.title
              : "Read More"
          }
          style={{ color: "#E70000", border: "solid 1px #E70000" }}
        />
      </div>
      <div style={{height:'600px'}}>
      <Image
        src={
          data?.homeAboutVideoImage?.node?.sourceUrl
            ? data?.homeAboutVideoImage?.node?.sourceUrl
            : "/images/Mask group (1).png"
        }
        alt="About image"
        height={535}
        width={600}
        className="about-image"
      />
      </div>
    </div>
  );
};

export default About;
