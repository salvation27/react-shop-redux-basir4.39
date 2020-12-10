import React from 'react'

const Product = ({product,addToCart}) => {
  return (
    <div className='product'>
      <a href="/">
         <img src={product.image} alt=""/>
        <p>{product.title}</p>
      </a>
      <div className="product-price">
           <div>{product.color}</div>  
           <div className='flex'>{
           product.availableSizes.map(item=>{
             return(
               <div>{item},</div>
             )
           })
           }</div> 

      </div>
      <div className="product-price">
           <div>${product.price}</div>
           <button 
           onClick={()=>addToCart(product)}
           className='button primary'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
