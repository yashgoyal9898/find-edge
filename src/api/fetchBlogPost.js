import { gql } from '@apollo/client';
import client from '../utils/apolloclientConfig'; // Adjust path as needed

const FETCH_POSTS_QUERY = gql`
  query {
  articles {
    data {
      attributes {
        title
        body 
        ArticleShortDescription
        publishedAt
        slug
        author {
          data 		{
            attributes {
              author_name
            }
          }
        }
       category {
          data {
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
`;

export const fetchPosts = async () => {
  try {
    const { data } = await client.query({ query: FETCH_POSTS_QUERY });
    return data.articles.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
