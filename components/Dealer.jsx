import Button from "./Button";

const Dealer = () => {
  return (
    <div
      className="dealer"
      style={{ backgroundImage: 'url("/images/become a dealer.png")' }}
    >
      <h4>Join the Success Journey</h4>
      <h1>Become A Dealer</h1>
      <div className="dealer-paragraph-text-wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur. integer dui quam nisi in
          ornare. Nice in tristique et uitrices sit ullamcrorper massa tempor
          et.
        </p>
      </div>
      <Button title="Read More" style={{ color: "#000", fontWeight: "600" }} />
    </div>
  );
};

export default Dealer;
