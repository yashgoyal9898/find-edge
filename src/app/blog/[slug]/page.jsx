import Head from 'next/head';
import { fetchPostBySlug } from '../../../api/getPostDetail'; // Adjust path if necessary
import Blogdetail from "@/components/Blogdetail/Blogdetail";

// This function runs on the server and sets dynamic metadata
export async function generateMetadata({ params }) {
  const postDetails = await fetchPostBySlug(params.slug);

  if (!postDetails) {
    return {
      title: 'Trademinia',
      description: 'No description available',
      keywords: 'trading, finance, blog',
    };
  }
  return {
    title: `${postDetails.title}`,
    description: postDetails.ArticleShortDescription || 'Default description for Trademinia',
    keywords: postDetails.metakeywords || 'trading, finance, blog',
  };
}

export default async function BlogPostPage({ params }) {
  const postDetails = await fetchPostBySlug(params.slug);

  if (!postDetails) {
    return <div>No post found</div>;
  }

  const metadata = await generateMetadata({ params });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postDetails.title,
    "description": postDetails.ArticleShortDescription,
    "url": `https://www.example.com/blog/${postDetails.slug}`,
    "image": postDetails.thumbnailImage,
    "author": {
      "@type": "Person",
      "name": postDetails.authorName || 'Author Name',
    },
    "datePublished": postDetails.publishedAt,
    "dateModified": postDetails.updatedDate || postDetails.publishedAt,
    "mainEntityOfPage": `https://www.example.com/blog/${postDetails.slug}`,
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`https://www.example.com/blog/${params.slug}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`https://www.example.com/blog/${params.slug}`} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Blogdetail
        key={postDetails.id}
        articleDetails={{
          tableofcontent: postDetails.tableofcontent,
          title: postDetails.title,
          metakeywords: postDetails.metakeywords,
          articleshortdescription: postDetails.ArticleShortDescription,
          articlebody: postDetails.articlebody,
          publishedAt: postDetails.publishedAt,
          articledetailbanner: postDetails.articledetailbanner?.data?.attributes?.url,
          thumbnailImage: postDetails.image?.data?.attributes?.url,
        }}
      />
    </>
  );
}
