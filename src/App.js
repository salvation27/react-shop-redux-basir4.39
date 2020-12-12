import React from 'react'
import './App.css'
import products   from './data/data'
import Content from './components/Content/Content'
import Filter from './components/Filter/Filter'

class App extends React.Component {
// constructor(){
//   super();
//   this.state={
    
//   }
// }
  state = {
    products: products,
    size:'',
    sort:'',
    color:'',
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
  }

createOrder =(order)=>{
  alert('saver order for' + order.name)
  // console.log(order);
  }

sortProducts =(e)=>{
this.setState(state=>({
  sort:e.target.value,
  products:this.state.products
    .slice()
    .sort((a,b)=>
    e.target.value === 'lowest'? 
       a.price < b.price  
        ?1
        :-1
    :e.target.value === 'highest'?
    a.price >  b.price ? 
    1:
    -1
    :a._id < b._id ? 
    1:
    -1
  ),
}))
}

sizeProducts=(e)=>{
  if(e.target.value ===''){
    this.setState({
      size:e.target.value,
      products: products,
    })
  } else {
    this.setState({
      size:e.target.value,
      products:products.filter(product=>product.availableSizes.indexOf(e.target.value)>=0)
    })
  }
}

colorProducts = (e) =>{
  if(e.target.value === ''){
    this.setState({
      sort:'',
      color:e.target.value,
      products: products,
    })
  } else {
    this.setState({
      
      color:e.target.value,
      products:products.filter(item=>item.color === e.target.value)
    })
  }
}

// добавляет в корзину продукт

addToCart = (product) => {
  const cartItems = this.state.cartItems.slice()
  let alreadyInCart = false
  cartItems.forEach(item=>{
    if(item._id===product._id){
      item.count++
      alreadyInCart = true
    }
  })
  if(!alreadyInCart){
    cartItems.push({...product, count:1})
  }
  this.setState({
    cartItems
  })
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
}


removeFromCart = (item) => {
 const cartItems = this.state.cartItems.slice()
 this.setState({
  cartItems:cartItems.filter(x => x._id !== item._id)
 })
 localStorage.setItem('cartItems',JSON.stringify(cartItems))
}



 render(){
  return (
    <div className="grid_container">
      <header>
        <a href="/">React Shop</a>
      </header>
      <div className="filter">
        <Filter 
        count={this.state.products.length}
        size = {this.state.size}
        sort ={this.state.sort}
        sizeProducts={this.sizeProducts}
        sortProducts={this.sortProducts}
        color={this.state.color}
        colorProducts ={this.colorProducts}
        />
      </div>
      <main>
        <Content 
        products={this.state.products} 
        cartItems={this.state.cartItems} 
        addToCart={this.addToCart}
        removeFromCart={this.removeFromCart}
        createOrder={this.createOrder}
        />
      </main>
      <footer>
        all rigth reserved
      </footer>
    </div>
  );
 }
}

export default App;
