
import { ApolloProvider, ApolloClient, InMemoryCache ,HttpLink,from } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { useEffect } from 'react'
import Navbar from './Components/Navbar';
import GetCategories from "./Components/GetCategories";
import productListing from "./Components/productListing";
import productDetails from "./Components/ProductDetails";
import ProductListing from "./Components/productListing";
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
    <BrowserRouter>
       <Navbar/>
       <ProductListing/>
       <Routes>
       <Route path="/" exact component={productListing}/>
       <Route path="/product/:productid" exact component={productDetails}/>
      <Route>404 Not Found</Route>
      </Routes>
  </BrowserRouter>
  </div>
  </ApolloProvider>
}
export default App;
