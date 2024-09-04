// pages/BlogPage.js
"use client"
import "./Blogpage.css";
import Loader from '@/components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/fetchBlogPost'; // Adjust path as needed
import Blogpostcard from '@/components/Blogpostcard/Blogpostcard';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log(data);
        setPosts(data || []);
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
    <section className='tm-blogpage'>
      <h1>Latest Articles</h1>
      <div className='home-latest-post'>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Blogpostcard
              key={post.id}
              article={{
                title: post.attributes.title,
                publishedAt: post.attributes.publishedAt,
                slug: post.attributes.slug,
                author: post.attributes.author.data.attributes.author_name,
                categories: post.attributes.category.data.attributes.title,
                ArticleShortDescription: post.attributes.ArticleShortDescription,
              }}
            />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
