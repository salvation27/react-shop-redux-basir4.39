import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Product from './Product'
import Zoom from 'react-reveal/Zoom'


export default class Products extends Component {
  state ={
    product:null
  }

  openModal=(product)=>{
    this.setState({
      product
    })
  }

  closeModal=()=>{
    this.setState({
      product:null
    })
  }

  render() {
    const{products,addToCart} = this.props
    const{product} = this.state
    return (
      <div>
        <Fade bottom>
          <ul className="products">
              {
                products.map((product,i)=>{
                  return(
                    <Product product={product} addToCart={addToCart} key={i} openModal={this.openModal}/>
                  )
                })
              }
          </ul>
        </Fade>
        {
          product && (
            <Modal 
              isOpen={true}
            >
              <Zoom>
                <div className='flex' style={{justifyContent:"space-between"}}>
                  <div>Modal</div>
                  <div onClick={this.closeModal} className='button'>X</div>
                </div>
                 <div className="product-details" style={{padding:'30px'}}>
                   <div className="product-foto">
                      <img src={product.image} alt=""/>
                   </div>
                   <div className="product-text" style={{paddingRight:'230px'}}>
                      <strong>
                      <h2>{product.title}</h2>
                        </strong>
                      <div style={{width:'230px'}}>{product.description}</div>
                      <div>размеры :
                        {
                        product.availableSizes.map(item=><button style={{margin:'0px 10px'}}>{item}</button>)
                        }
                        </div>
                      <div>${product.price}</div>
                      <button
                      className='button primary'
                      onClick={()=>{
                        addToCart(product)
                        this.closeModal()
                      }}
                      >
                        Add to Cart
                      </button>
                   </div>

                 </div>
              </Zoom>
            </Modal>
          )
        }
      </div>
    )
  }
}
