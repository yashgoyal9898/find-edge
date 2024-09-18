import React from 'react';
import "./Blogdetail.css";
import Image from 'next/image';
import Socialshare from '../Socialshare/Socialshare';

function renderArticleBody(articlebody) {
  if (!articlebody || !Array.isArray(articlebody)) return null;

  return articlebody.map((section, index) => (
    <div key={index} className="post-body-section">
      {section.type === "paragraph" && section.children && section.children.map((child, childIndex) => {
        if (child.type === "text") {
          return <p key={childIndex}>{child.text}</p>;
        }
        return null;  
      })}

      {section.type === "heading" && section.children && (
        <div key={index} className={`heading-level-${section.level}`}>
          {section.children.map((child, childIndex) => {
            if (child.type === "text") {
              const HeadingTag = `h${section.level}`;  
              return <HeadingTag key={childIndex}>{child.text}</HeadingTag>;
            }
            return null;  
          })}
        </div>
      )}

      {section.type === "image" && section.image && (
        <div key={index} className="image-container">
          <Image
            src={`${section.image.url}`}  // Adjust if needed
            alt={section.image.alternativeText || 'Image'}
            width={300}
            height={300}
          />
          {section.image.caption && (
            <figcaption>{section.image.caption}</figcaption>
          )}
        </div>
      )}

      {section.type === "list" && section.format && section.children && (
        <div key={index} className={`list-${section.format}`}>
          {section.format === "ordered" ? (
            <ol>
              {section.children.map((listItem, itemIndex) => (
                <li key={itemIndex}>
                  {listItem.children && listItem.children.map((child, childIndex) => {
                    if (child.type === "text") {
                      // Conditionally apply styles based on attributes
                      let textStyle = {};
                      if (child.bold) textStyle.fontWeight = 'bold';
                      // Add other style conditions if needed (e.g., italic, underline)

                      return (
                        <span key={childIndex} style={textStyle}>
                          {child.text}
                        </span>
                      );
                    }
                    return null;  // Handle other child types if needed
                  })}
                </li>
              ))}
            </ol>
          ) : (
            <ul>
              {section.children.map((listItem, itemIndex) => (
                <li key={itemIndex}>
                  {listItem.children && listItem.children.map((child, childIndex) => {
                    if (child.type === "text") {
                      // Conditionally apply styles based on attributes
                      let textStyle = {};
                      if (child.bold) textStyle.fontWeight = 'bold';
                      // Add other style conditions if needed (e.g., italic, underline)

                      return (
                        <span key={childIndex} style={textStyle}>
                          {child.text}
                        </span>
                      );
                    }
                    return null;  // Handle other child types if needed
                  })}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

    </div>
  ));
}

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

const Blogdetail = ({ articleDetails }) => {
  const {
    title,
    articlebody,
    publishedAt,
    articledetailbanner
  } = articleDetails || {};

  const websiteUrl="fsda"

  return (
    <main className="tmb-container">
      <Socialshare url={`${websiteUrl + '/blog/how-to-build-stocks-portfolio'}`} />
      <article>
        <section>
          <div className='blogdetail-header'>
            <div>
              <h1>{title}</h1>
              <p>{formatApiDate(publishedAt)}</p>
            </div>
            <div className='img-div'> <Image alt={title} src={`http://localhost:1337${articledetailbanner}`} width={720} height={500} /></div>     
          </div>
        </section>
        <section>
          <div className="blog-detail">
            <div className='bd-left'>
              <div className="blog-content"> {renderArticleBody(articlebody)} </div>
            </div>
            <div className='bd-right'>
              <div className='bd-adsbanner'>ADS BAnner</div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Blogdetail;
