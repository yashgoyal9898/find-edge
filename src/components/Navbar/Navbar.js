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
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li className="menu-item" onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
