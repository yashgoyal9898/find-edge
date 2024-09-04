
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP Link
const httpLink = new HttpLink({
  uri: 'http://localhost:1337/graphql', // Replace with your Strapi GraphQL endpoint
});

// Create an Auth Link to add headers
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from environment variables
  const token = process.env.NEXT_PUBLIC_API_TOKEN || 'a372efaf1fde129f4255fd0f3942c5c4df934542cdaa9173b9b16748fd381f112fe94b7c0f6e0b784f3bed0db61af41c7e31c417311a29fbcc758aad5125ea452f2a2a3c561453b751020cc66680fcff5789ca5d691a6f51dd6ad6e124bbd4c0a55fdf477a013dbc64b8973bf9d2c5383649eea04863177fa56989666c00484c';

  // Return the headers to the context, including the auth token
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Combine Auth Link and HTTP Link
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
