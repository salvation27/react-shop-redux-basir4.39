import React from 'react'


const Product = ({product,addToCart,openModal}) => {
  return (
    
    <div className='product'>
      <div href="/" onClick={()=>openModal(product)}>
         <img src={product.image} alt=""/>
        <p>{product.title}</p>
      </div>
      <div className="product-price">
           <div>{product.color}</div>  
           <div className='flex'>{
           product.availableSizes.map((item,i)=>{
             return(
               <div key={i}>{item},</div>
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
