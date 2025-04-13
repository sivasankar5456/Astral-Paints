import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Colours from "@/components/Colours";
import CopyRight from "@/components/CopyRight";
import Dealer from "@/components/Dealer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Image from "next/image";
// import axios from "axios";
import { getData, homePageEndpoint, QUERY } from "@/services";

export default async function Home() {
  const data = await getData(homePageEndpoint, QUERY);
  const homepageData = data?.pages?.nodes[0]?.homepage;

  const aboutData = {
    homeAboutTitle: homepageData?.homeAboutTitle,
    homeAboutSubtitle: homepageData?.homeAboutSubtitle,
    homeAboutButton: homepageData?.homeAboutButton,
    homeAboutDescription: homepageData?.homeAboutDescription,
    homeAboutVideoImage: homepageData?.homeAboutVideoImage,
    homeAboutVideoUrl: homepageData?.homeAboutVideoUrl,
  };

  return (
    <div>
      <Navbar />
      <section className="hompage">
        <section>
          <Banner data={homepageData.banners[0]} />
          <div className="rainbow-wrapper">
            <Image
              src="/logos/Group 54.png"
              alt="rainbow"
              width={1920}
              height={300}
              className="rainbow-image"
            />
          </div>
        </section>

        <section className="page-content-container">
          <div className="rainbow-bar"></div>
          <div className="page-content">
            <div className="componet-layout">
              <About data={aboutData} />
            </div>

            <div className="componet-layout">
              <Category data={homepageData} />
            </div>

            <div className="componet-layout">
              <Service data={homepageData} />
            </div>

            <div className="componet-layout">
              <Colours data={homepageData} />
            </div>

            <div className="componet-layout">
              <Dealer />
            </div>

            <div className="componet-layout" style={{ paddingBottom: "70px" }}>
              <Blog />
            </div>

          </div>
        </section>
      </section>
      <CopyRight />
    </div>
  );
}
