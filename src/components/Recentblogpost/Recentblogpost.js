import React from 'react'
import "./Recentblogpost.css"
import Image from 'next/image';
import Link from 'next/link';

function formatApiDate(publishedAt) {
    const date = new Date(publishedAt);
    const publishDate = date.toLocaleString('en-US', {
      month: 'short',    // "Dec"
      day: 'numeric',    // "12"
      year: 'numeric'    // "2024"
    });
    return publishDate;
}

  

const Recentblogpost = ({ article }) => {

    const {
        title,
        thumbnailImage,
        publishedAt,
        slug,
        author,
        ArticleShortDescription
      } = article || {};

  return (
    <div className='tm-rcntpost'>
        <div className='rcntpost'>
            <div className='rcntpostcnt'>
                <Link className="tm-text-hover" href={`/blog/${slug}`}> <h3>{title}</h3> </Link>
                <p>{ArticleShortDescription}</p>
                <div>{formatApiDate(publishedAt) + ` by ${author}`}</div>
            </div>
            <div className='rcntpostimg'>
                <Image alt={title} src={`http://localhost:1337${thumbnailImage}`} width={360} height={360} />
            </div>
        </div>
    </div>
  )
}

export default Recentblogpost