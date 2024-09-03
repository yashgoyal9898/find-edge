import Image from "next/image";
import "./Blogpostcard.css";
import Link from "next/link";


function Blogpostcard({ article }) {
  
  const {
    title = "Default Title",
    publishedAt = "f",
    slug 
  } = article || {};

  return (
    <Link href={`/blog/${slug}`}>
      <div className="bpc-par-wrapper">
        <Image alt={title} src="/image/blog-post-card.png" width={500} height={500} />
        <div className="bpc-contnt">
          <span>Hello</span>
          <h4 className="post-title">{title}</h4>
          <div className="post-author-details">
            <div>
              <Image alt="Default Author" src="/image/bpc-author.png" width={36} height={36} />
              <span>Default Author</span>
            </div>
            <span>{publishedAt.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Blogpostcard;
