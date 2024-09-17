"use client"
import "./homepage.css"
import Homebanner from "@/components/Homebanner/Homebanner";
import Recentblogpost from "@/components/Recentblogpost/Recentblogpost";

import Loader from '@/components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/fetchBlogPost'; // Adjust path as needed

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts(3);
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
    <main className="tm-pgemaincnt">
      <Homebanner />
      <div className="recntblogposr-sec">
        <h2>Recent Post</h2>
        {posts.length > 0 ? (
            posts.map((post) => (
              <Recentblogpost
                key={post.id}
                article={{
                  title: post.attributes.title,
                  thumbnailImage: post.attributes.image.data.attributes.url,
                  publishedAt: post.attributes.publishedAt,
                  slug: post.attributes.slug,
                  author: post.attributes.author.data.attributes.author_name,
                  categories: post.attributes.category.data.attributes.title,
                  ArticleShortDescription: post.attributes.ArticleShortDescription,
                }}
              />
            ))
          ) : (
            <p>No Recent Post available.</p>
          )}
      </div>
    </main>
  );
}
