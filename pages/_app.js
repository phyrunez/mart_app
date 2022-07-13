import '../styles/globals.css'
import '../styles/TrancDate.css'
import '../styles/TransactionData.css'
import '../styles/TransactionFilter.css'
import '../styles/TransactionMain.css'
import '../styles/TransactionNav.css'
import '../styles/TransactionSidebar.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
