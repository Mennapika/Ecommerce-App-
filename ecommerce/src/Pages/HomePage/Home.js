import React, { Component } from 'react'
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection';
import SHOP_DATA from './shop.data'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      collections:SHOP_DATA
    }
  }
  render() {
       const {collections}=this.state;
    return (
      <div className='home-page-conatiner'>
       {
         collections.map(({id,...otherCollectionProps}) =>(
           <PreviewCollection key={id}  {...otherCollectionProps}/>
         ))
       }
      </div>
    )
  }
}
