import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-wrapper">
        <Image
          src="/logos/Astral-Paints-Logo-OL-23.png"
          alt="Astral Paint Icon"
          width={150}
          height={48}
        />
      </div>
      <div className="nav-links-wrapper">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Category</Link>
          </li>
          <li>
            <Link href="/about">Services</Link>
          </li>
          <li>
            <Link href="/about">Colours</Link>
          </li>
          <li>
            <Link href="/about">Downloads</Link>
          </li>
          <li>
            <Link href="/about">Become A Dealer</Link>
          </li>
          <li>
            <Link href="/contact">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Button title="Enquire Now" />
      </div>
    </nav>
  );
};

export default Navbar;
