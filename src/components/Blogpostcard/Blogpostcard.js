import Image from "next/image";
import "./Blogpostcard.css";
import Link from "next/link";

//function to format the date 
function formatApiDate(publishedAt) {
  const date = new Date(publishedAt);
  const publishDate = date.toLocaleString('en-US', {
    month: 'short',    // "Dec"
    day: 'numeric',    // "12"
    year: 'numeric'    // "2024"
  });
  return publishDate;
}

function Blogpostcard({ article }) {
  
  const {
    title,
    thumbnailImage,
    publishedAt,
    slug,
    author,
    categories,
    ArticleShortDescription
  } = article || {};

  return (
    <div className="bpc-par-wrapper">
      <div className="thumbnailimg">
        <Image alt={title} src={`http://localhost:1337${thumbnailImage}`} width={500} height={500} />
      </div>
      <div className="bpc-contnt">
        <span>{categories}</span>
        <h4 className="post-title">{title}</h4>
        <div className="post-author-details">
          {formatApiDate(publishedAt) + ` by ${author}`}
        </div>
        <p className="post-contnt" dangerouslySetInnerHTML={{ __html: ArticleShortDescription }} />
      </div>
      <Link className="readmore-btn" href={`/blog/${slug}`} >Read More</Link>
    </div>
  );
}

export default Blogpostcard;
