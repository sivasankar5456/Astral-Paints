import Button from "./Button";

const Banner = ({
  data = {
    bannersTitle: "Interior Emulsions",
    bannerDescription: "Excellent Fungal Resistance | Smooth Finish",
    bannerButton: null,
  },
}) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: 'url("/images/Mask group.png")' }}
    >
      <div className="banner-content">
        <div className="banner-text">
          <div style={{ width: "150px" }}>
            <h1>{data?.bannersTitle}</h1>
          </div>
          <p>{data?.bannerDescription}</p>
          <Button
            title={
              data?.bannerButton?.title
                ? data?.bannerButton?.title
                : "Read More"
            }
            style={{ color: "#5E4D7A" }}
          />
        </div>
        <div className="banner-sidecontent">
          <div
            className="straight-line"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
          <div className="straight-line" />
          <div className="straight-line" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
