import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer a372efaf1fde129f4255fd0f3942c5c4df934542cdaa9173b9b16748fd381f112fe94b7c0f6e0b784f3bed0db61af41c7e31c417311a29fbcc758aad5125ea452f2a2a3c561453b751020cc66680fcff5789ca5d691a6f51dd6ad6e124bbd4c0a55fdf477a013dbc64b8973bf9d2c5383649eea04863177fa56989666c00484c`, // Set token in environment variables
  },
});

export default axiosInstance;
