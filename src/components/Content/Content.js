import React from 'react'
import Products from '../Products/Products'

const Content = ({products}) => {
  return (
    <div className='content'>
      <div className="main">
        <Products products={products} />
      </div>
      <div className="sidebar">
        Сайт бар
      </div>
    </div>
  )
}

export default Content
