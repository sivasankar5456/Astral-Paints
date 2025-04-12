import Image from "next/image";
import Button from "./Button";

const CopyRight = () => {
  return (
    <footer
      className="copy-right"
      style={{ backgroundImage: `url("/images/Rectangle 82.png")` }}
    >
      <header className="title-group-wrapper">
        <h1>Group Company</h1>
        <ul>
          {["15", "16", "17", "18", "19"].map((num) => (
            <li key={num}>
              <Image
                src={`/logos/image ${num}.png`}
                alt="Astral Paint Icon"
                width={150}
                height={48}
                className="copyright-brand-logos"
              />
            </li>
          ))}
        </ul>
      </header>

      <section className="copyright-content-after-line">
        <div className="copyright-first">
          <aside className="copyright-left">
            <Image
              src="/logos/Astral-Paints-Logo-OL-23.png"
              alt="Astral Paint Icon"
              width={200}
              height={64}
            />
          </aside>

          <article className="copyright-right">
            <div className="copyright-input-text-wrapper">
              <div className="text-wrapper">
                <h5 className="copyright-subtitile">
                  Sign Up To Our Newsletter
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>

              <form className="input-button-container">
                <div className="input-continer">
                  <input type="text" placeholder="Enter Email Address" />
                </div>
                <Button title="Enquire Now" className="enqire-btn" />
              </form>
            </div>
          </article>
        </div>

        <div className="copyright-second">
          <address className="copyright-left">
            <h5 className="copyright-subtitile">Reach us</h5>

            <div className="img-logo-container">
              <Image
                src="/logos/carbon_location.png"
                alt="Location"
                width={25}
                height={25}
                className="copyright-icons"
              />
              <p className="copyright-text">
                #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                Bangalore - 560 058
              </p>
            </div>

            <div className="img-logo-container">
              <Image
                src="/logos/fluent_call-20-regular.png"
                alt="Call"
                width={25}
                height={25}
                className="copyright-icons"
              />
              <p className="copyright-text">+91 - 80 - 42552555</p>
            </div>

            <div className="img-logo-container">
              <Image
                src="/logos/emial-icon.png"
                alt="Email"
                width={20}
                height={17}
                className="copyright-icons"
              />
              <p className="copyright-text">Info@gem-Paints.com</p>
            </div>
          </address>

          <section className="copyright-right">
            <section className="copyright-about">
              <h5 className="copyright-subtitile">About</h5>
              <p className="copyright-text2">About Astrals</p>
              <p className="copyright-text2">Paint Journey</p>
              <p className="copyright-text2">Group Companies</p>
            </section>

            <section className="copyright-category">
              <h5 className="copyright-subtitile">Category</h5>
              <p className="copyright-text2">Interior Paints</p>
              <p className="copyright-text2">Exterior Paints</p>
              <p className="copyright-text2">Undercoats</p>
              <p className="copyright-text2">Painting Tools</p>
              <p className="copyright-text2">Water Proofing</p>
            </section>

            <section className="copyright-services">
              <h5 className="copyright-subtitile">Services</h5>
              <p className="copyright-text2">Wall Painting</p>
              <p className="copyright-text2">Water Solutions</p>
              <p className="copyright-text2">Painting</p>
              <p className="copyright-text2">Colour Shades</p>
            </section>

            <section className="copyright-titiles-logos">
              <h5 className="copyright-subtitile">Downloads</h5>
              <h5 className="copyright-subtitile">Become A Dealer</h5>
              <h5 className="copyright-subtitile">Blogs</h5>
              <h5 className="copyright-subtitile">Contacts</h5>

              <div className="copyright-logos">
                <div className="copyright-logo-wrapper">
                  <Image
                    src="/logos/fb-icon.png"
                    alt="Location"
                    width={9}
                    height={9}
                    className="copyright-logo"
                  />
                </div>
                <div className="copyright-logo-wrapper">
                  <Image
                    src="/logos/16px-logo-instagram.png"
                    alt="Location"
                    width={9}
                    height={9}
                    className="copyright-logo"
                  />
                </div>
                <div className="copyright-logo-wrapper">
                  <Image
                    src="/logos/bxl-youtube.png"
                    alt="Location"
                    width={11}
                    height={8}
                    className="copyright-logo"
                  />
                </div>
                <div className="copyright-logo-wrapper">
                  <Image
                    src="/logos/x-icon.png"
                    alt="Location"
                    width={9}
                    height={9}
                    className="copyright-logo"
                  />
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <section className="footer-bar">
        <span>Term & Conditions</span>
        <span>ALL RIGHTS RESERVED</span>
        <span>Privacy Policy</span>
      </section>
    </footer>
  );
};

export default CopyRight;
