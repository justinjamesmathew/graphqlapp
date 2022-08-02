import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//components
import BookList from "./components/BookList";

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4343/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <BookList />
    </ApolloProvider>
    );
}

export default App;
