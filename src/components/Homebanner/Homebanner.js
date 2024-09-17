"use client"

import Image from 'next/image';
import "./Homebanner.css"
import Blogpostcard from '../Blogpostcard/Blogpostcard';

const Homebanner = () => {
  return (
    <div className='tm-homebnr'>
      <div className='hmbnr-left'>
        <h1>Trademinia is an website which can read blog free beginner to advanced</h1>
      </div>
      <div className='hmbnr-right'>
        <Image alt="" src="/image/hmbnr-right.png" width="520" height="400" />
      </div>
    </div>
  );
};

export default Homebanner;
