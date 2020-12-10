import React from 'react'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'

const Content = ({products,cartItems,addToCart,removeFromCart,addToCart2}) => {

  return (
    <div className='content'>
      <div className="main">
        <Products products={products} addToCart={addToCart}/>
      </div>
      <div className="sidebar">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart}  />
      </div>
    </div>
  )
}

export default Content
