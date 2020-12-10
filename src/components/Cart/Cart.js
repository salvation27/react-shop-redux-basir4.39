import React, { Component } from 'react'

export default class Cart extends Component {
  render() {


     const {cartItems,removeFromCart} =this.props

    return (
      <>
      <div>
         {
           cartItems.length === 0 ?
           <div className='cart cart-header'>Корзина пустая</div>:
         <div className='cart cart-header'>В корзине {cartItems.length} товара(ов) </div>
         }
      </div>
      <div className='cart'>
          <ul className='cart-items'>
{
  cartItems.map(item=>{
    return (
      <li key={item._id}>
              <img src={item.image} alt=""/>
              
              <div>
              <div>{item.title}</div>
                  <div>цвет:{item.color}</div>
                 <div>{item.price} *{item.count}={item.price * item.count}</div>
              </div>
              <button onClick={()=>removeFromCart(item)}>Удалить</button>
        </li>
    )
  })
}
          </ul>
      </div>
{/* показывает блок тотал если есть в корзине товар */}
      {
        cartItems.length !== 0 && (
        <div className="total">
          total:
          {cartItems.reduce((a,b)=>a+b.price*b.count,0)}
          <button className='button primary'>Proseed</button>
        </div>
        )
      }
     
      </>
    )
  }
}
