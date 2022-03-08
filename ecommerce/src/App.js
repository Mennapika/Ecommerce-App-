
import { ApolloProvider, InMemoryCache ,HttpLink,from, gql,ApolloClient } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import {Switch,
  Route
} from "react-router-dom";
import React, { useEffect } from 'react'
import Navbar from './Components/NavBar/Navbar';
import GetCategories from "./Components/GetCategories";
import productListing from "./Components/productListing";
import productDetails from "./Components/ProductDetails";
import ProductListing from "./Components/productListing";
import Home from "./Pages/HomePage/Home";

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

function App () {
  return <ApolloProvider client={client}>
    <div className="grid-container">
       <Navbar/>
       <Switch>
       <Route  exact path="/" component={Home}/>
       <Route path="/product/:productid"  component={productDetails}/>
       <Route path="/All"  component={productDetails}/>
      <Route>404 Not Found</Route>
      </Switch>
  </div>
  </ApolloProvider>
}
export default App;
