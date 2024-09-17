import { gql } from '@apollo/client';
import client from '../utils/apolloclientConfig'; // Adjust path as needed

const FETCH_POSTS_QUERY = gql`
  query FetchLimitedPosts($limit: Int) {
    articles(pagination: { limit: $limit }) {
      data {
        attributes {
          title
          ArticleShortDescription
          publishedAt
          slug
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          author {
            data {
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

export const fetchPosts = async (limit = 3) => {
  try {
    const { data } = await client.query({
      query: FETCH_POSTS_QUERY,
      variables: { limit }, // Pass the limit as a variable
    });
    return data.articles.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
