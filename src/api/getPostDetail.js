import { gql } from '@apollo/client';
import client from '../utils/apolloclientConfig'; // Ensure the path is correct

// Define the GraphQL query
const GET_BLOG_DETAIL = gql`
  query getBlogDetail($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          tableofcontent
          title
          articlebody
          ArticleShortDescription
          metakeywords
          publishedAt
          author {
            data {
              attributes {
                author_name
              }
            }
          }
          articledetailbanner {
            data {
                attributes {
                  url
                  alternativeText
                }
              }
          }
          image {
            data {
                attributes {
                  url
                  alternativeText
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

// Fetch post details based on slug
export const fetchPostBySlug = async (slug) => {
  try {
    const { data } = await client.query({
      query: GET_BLOG_DETAIL,
      variables: { slug }, // Pass slug as a variable
    });

    // Return the article data
    return data.articles.data[0]?.attributes || null; // Assuming `slug` is unique
  } catch (error) {
    console.error('Error fetching post details:', error);
    throw error;
  }
};
