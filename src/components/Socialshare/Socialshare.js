import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./Socialshare.css";

const Socialshare = ({ url}) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className='tm-social-share'>
      <Link
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/image/pinterest.svg" width="24" height="24" alt="Share on Pinterest" />
      </Link>
      <Link
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/image/facebook.svg" width="24" height="24" alt="Share on Pinterest" />
      </Link>
      <Link
        href={`https://api.whatsapp.com/send?${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/image/whatsapp.svg" width="24" height="24" alt="Share on Pinterest" />
      </Link>
      <Link
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/image/instagram.svg" width="24" height="24" alt="Share on Pinterest" />
      </Link>
      <Link
        href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/image/quora.svg" width="24" height="24" alt="Share on Pinterest" />
      </Link>
    </div>
  );
};

export default Socialshare;
