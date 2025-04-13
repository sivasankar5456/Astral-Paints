"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

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

      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-links-wrapper ${isOpen ? "active" : ""}`}>
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
