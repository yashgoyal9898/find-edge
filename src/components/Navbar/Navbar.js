"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <nav>
        <div className="logo">
          <Image src="/image/main-logo.png" alt="My Logo" width={120} height={27} />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li className="close-menu" onClick={closeMenu}>
            &times;
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/services">About</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
