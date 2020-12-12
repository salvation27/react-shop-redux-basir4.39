import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

export default class Cart extends Component {
state={
  showCheckout:false,
  name:'',
  email:'',
  addres:'',
}

handleInput = (e) =>{
this.setState({
  [e.target.name]:e.target.value
})
}
createOrder= (e) => {
e.preventDefault()
const order ={
  name:this.state.name,
  email:this.state.email,
  addres:this.state.addres,
  cartItems:this.props.cartItems
}
this.props.createOrder(order)
}
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
      <Fade left key={item._id} >

    
      <li>
              <img src={item.image} alt=""/>
              
              <div>
              <div>{item.title}</div>
                  <div>цвет:{item.color}</div>
                 <div>{item.price} *{item.count}={item.price * item.count}</div>
              </div>
              <button onClick={()=>removeFromCart(item)}>Удалить</button>
        </li>
        </Fade>
    )
  })
}
          </ul>
      </div>
{/* показывает блок тотал если есть в корзине товар */}
      {
        cartItems.length !== 0 && (
    <div>
        <div className="total">
          total:
          {cartItems.reduce((a,b)=>a+b.price*b.count,0)}
          <button
          onClick={
            ()=>{this.setState({showCheckout:true})}
          }
          className='button primary'>Proseed</button>
        </div>

        {
          this.state.showCheckout && (
            <Fade top>
            <div className='cart'>
            <form onSubmit={this.createOrder}>
                <ul className='form-container'>
                     <li>
                       <label>Name</label>
                       <input 
                       name='name'
                       type="text" 
                       required 
                       onChange={this.handleInput}/>
                     </li>
                     <li>
                       <label>Email</label>
                       <input 
                       name='email'
                       type="email" 
                       required 
                       onChange={this.handleInput}/>
                     </li>
                     <li>
                       <label>Addres</label>
                       <input 
                       name='addres'
                       type="text" 
                       required 
                       onChange={this.handleInput}/>
                     </li>
                     <li>
                       <button
                       tupe='submit' className='button primary'>Checout</button>
                     </li>
                </ul>
            </form>
            </div>
            </Fade>
          ) 
        }
        
    </div>
        )
      }
     
      </>
    )
  }
}
