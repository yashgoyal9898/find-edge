"use client"
import Loader from '@/components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/fetchBlogPost';
import Blogpostcard from '@/components/Blogpostcard/Blogpostcard';



const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        if (data && Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          setPosts([]);
        }
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='home-latest-post'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Blogpostcard key={post.id} 
          article = {
            {
              title: post.attributes.title,
              publishedAt: post.attributes.publishedAt,
              slug: post.attributes.slug
            }
          }/>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default BlogPage;

