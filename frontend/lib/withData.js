// helps with server side rendering
import withApollo from 'next-with-apollo';
// package from Apollo that has all the apollo stuff you want
// client, cache, http, error, etc. they're all preconfigured in boost
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
