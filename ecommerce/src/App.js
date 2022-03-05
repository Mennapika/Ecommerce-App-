
import { ApolloProvider, ApolloClient, InMemoryCache ,HttpLink,from } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import GetCategories from './Components/GetCategories';
import Navbar from './Components/Navbar';
const errorLink = onError(({graphqlErrors,networkErrror})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`Graphql error ${message}`)
    })
    }
})
const link = from([
  errorLink,
  new HttpLink({ uri:"http://localhost:4000/graphql"}),
])
const client = new ApolloClient({
  cache:new InMemoryCache(),
  link:link,
})
function App() {
  return <ApolloProvider client={client}>
    <div className="grid-container">
  <Navbar/>
  </div>
  </ApolloProvider>
}
export default App;
