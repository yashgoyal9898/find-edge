"use client"

import Image from 'next/image';
import "./Homebanner.css"
import Blogpostcard from '../Blogpostcard/Blogpostcard';
import Link from 'next/link';

const Homebanner = () => {
  return (
    <div className='tm-homebnr'>
      <div className='hmbnr-left'>
        <h1><span>Trademinia:</span> Your Gateway to Stock Market Mastery - Beginner Basics to Advanced</h1>
        <span><Link className='tm-primary-btn' href="/blog"> Read Blogs</Link></span>
      </div>
      <div className='hmbnr-right'>
        <Image alt="" src="/image/hmbnr-right.png" width="520" height="400" />
      </div>
    </div>
  );
};

export default Homebanner;
