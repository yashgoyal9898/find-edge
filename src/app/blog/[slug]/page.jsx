"use client";
import "./blogpostpage.css";
import { useEffect, useState } from 'react';
import { fetchPostBySlug } from '../../../api/getPostDetail'; // Adjust path if necessary
import Blogdetail from "@/components/Blogdetail/Blogdetail";
import Loader from "@/components/Loader/Loader";

function BlogPost({ params }) {
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      setLoading(true);
      fetchPostBySlug(params.slug)
        .then((data) => {
          setPostDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) {
    return <Loader />
  }

  if (!postDetails) {
    return <div>No post found</div>;
  }

  return (
    <Blogdetail 
      key={postDetails.id}
      articleDetails={{
        tableofcontent: postDetails.tableofcontent,
        title: postDetails.title,
        articlebody: postDetails.articlebody,
        publishedAt: postDetails.publishedAt,
        articledetailbanner: postDetails.articledetailbanner.data.attributes.url,
        thumbnailImage: postDetails.image.data.attributes.url,
      }}
    />
  );
}

export default BlogPost;
