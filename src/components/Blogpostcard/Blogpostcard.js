import Image from "next/image";
import "./Blogpostcard.css";

function Blogpostcard({ article }) {
  const {
    title = "Default Title",
    author = "Default Author",
    publishedAt = "N/A",
    urlToImage = "/image/blog-post-card.png",
    description = "Default description",
    source = { name: "General" }
  } = article || {};

  return (
    <div className="bpc-par-wrapper">
      <Image alt={title} src="/image/blog-post-card.png" width={500} height={500} />
      <div className="bpc-contnt">
        <span>{source.name}</span>
        <h4 className="post-title">{title}</h4>
        <div className="post-author-details">
          <div>
            <Image alt={author} src="/image/bpc-author.png" width={36} height={36} />
            <span>{author}</span>
          </div>
          <span>{new Date(publishedAt).toLocaleDateString() || publishedAt}</span>
        </div>
      </div>
    </div>
  );
}

export default Blogpostcard;
