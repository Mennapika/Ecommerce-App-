import React, { Component } from 'react'
import "../PreviewCollection/PreviewCollection.styles.scss"
import ProductItem from '../ProductItem/ProductItem'
import Aos from "aos";
import"aos/dist/aos.css"
const PreviewCollection=({category,products})=>(
        <div className='preview-collection-container'>
            <h1 className='preview-collection-Catrgory'> {category.toUpperCase()}</h1>
            <div className='preview-collection-preview'>
              {products.filter((product,index)=>index<4).map(({id,...otherProductProps})=>(
                    <ProductItem key={id} {...otherProductProps} />
                  ))
              }
            </div>
        </div>
)
export default PreviewCollection
