import axiosInstance from '../utils/axiosConfig';

export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw error to handle it in the calling function
  }
};
