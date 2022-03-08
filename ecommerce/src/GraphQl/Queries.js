import {gql} from "@apollo/client"
export const LOAD_CATEGORIES =gql`
query{
    categories{
      name
    }
    }
`;
export const LOAD_PRODUCT =gql`
query{
  category{
    products{name , id ,category , inStock ,gallery , description, brand,prices{
      currency{
        label
        symbol
      }
      amount
    }},
    
  }
  }
`;