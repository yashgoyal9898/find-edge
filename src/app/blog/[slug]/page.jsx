"use client"
import "./blogpostpage.css"
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../api/fetchBlogPost';
function BlogPost({params}) {
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
    return ;
  }
  return (
    <section>
      <div className='tm-bppage'>
        <div className="bppage-top">
          <h1>{params.slug}</h1>
        </div>
        <div className="bppage-bottom">
          <div className="bottom-left">complete body</div>
          <div className="bottom-right"></div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost