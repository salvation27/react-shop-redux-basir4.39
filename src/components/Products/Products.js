import React, { Component } from 'react'
import Product from './Product'
 
export default class Products extends Component {
  render() {
   
    const{products} = this.props
    return (
      <div>
        <ul className="products">
            {
              products.map((product,i)=>{
                return(
                  <Product product={product}  key={i}/>
                )
              })
            }
        </ul>
      </div>
    )
  }
}
