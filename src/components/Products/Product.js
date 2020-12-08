import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
      <a href="/">
         <img src={product.image} alt=""/>
        <p>{product.title}</p>
      </a>
      <div className="product-price">
           <div>${product.price}</div>
           <button className='button primary'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
