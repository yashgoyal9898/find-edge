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
    <header>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <nav>
        <div className="logo">
          <Image src="/image/navbar-logo.png" alt="My Logo" width={150} height={24} />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li className="close-menu" onClick={closeMenu}>
            &times;
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link className="tm-text-hover" href="/">Home</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link className="tm-text-hover" href="/blog">Blogs</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link className="tm-text-hover" href="/about">About us</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link className="tm-text-hover" href="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
