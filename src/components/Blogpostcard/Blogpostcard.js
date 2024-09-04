import Image from "next/image";
import "./Blogpostcard.css";
import Link from "next/link";

//function to format the date 
function formatApiDate(publishedAt) {
  const date = new Date(publishedAt);
  const publishDate = date.toLocaleString('en-US', {
    month: 'short',    // "Sep"
    day: 'numeric',    // "3"
    year: 'numeric',   // "2024"
    hour: 'numeric',   // "4"
    minute: 'numeric', // "45"
    second: 'numeric', // "00"
    hour12: true       // "AM/PM"
  });
  return publishDate;
}

function renderArticleShortDescriptionContent(ArticleShortDescription) {
  if (!ArticleShortDescription) return null;

  return ArticleShortDescription.map((section, index) => (
    <div key={index} className="post-body-section">
      {section.children.map((child, childIndex) => (
        <p key={childIndex}>{child.text}</p>
      ))}
    </div>
  ));
}

function Blogpostcard({ article }) {
  
  const {
    title,
    publishedAt,
    slug,
    author,
    categories,
    ArticleShortDescription
  } = article || {};

  return (
    <div className="bpc-par-wrapper">
      <Image alt={title} src="/image/blog-post-card.png" width={500} height={500} />
      <div className="bpc-contnt">
        <span>{categories}</span>
        <h4 className="post-title">{title}</h4>
        <div className="post-author-details">
          {formatApiDate(publishedAt) + ` by ${author}`}
        </div>
        <div className="post-contnt">
          {renderArticleShortDescriptionContent(ArticleShortDescription)}
        </div>
      </div>
      <div className="readmore-btn"><Link href={`/blog/${slug}`} >Read More</Link></div>
    </div>
  );
}

export default Blogpostcard;
