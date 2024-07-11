"use client"

import Image from 'next/image';
import "./Homebanner.css"
import Blogpostcard from '../Blogpostcard/Blogpostcard';

const Homebanner = () => {
  return (
    <div>
      <div className='img-wrapper'>
        <Image src="/image/home-banner.png" alt="Home banner" width={500} height={300} layout="responsive" />
      </div>
      <div className='home-latest-post'>
        <Blogpostcard />
        <Blogpostcard />
        <Blogpostcard />
        <Blogpostcard />
        <Blogpostcard />
        <Blogpostcard />
      </div>
    </div>
  );
};

export default Homebanner;
