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
    sort:''
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
        />
      </div>
      <main>
        <Content products={this.state.products} />
      </main>
      <footer>
        all rigth reserved
      </footer>
    </div>
  );
 }
}

export default App;
