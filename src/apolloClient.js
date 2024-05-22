import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8081/graphql', // Certifique-se de que a URL está correta
  }),
  cache: new InMemoryCache(),
});

export default client;
