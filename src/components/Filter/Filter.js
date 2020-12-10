import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    const{count,sort,sortProducts,size,sizeProducts,color,colorProducts} = this.props
    return (
      <div className='filter'>
        <div className="filter_result">Продуктов на странице {count}</div>
        <div className="filter_sort">
          Order
          <select 
          value ={sort}
          onChange={sortProducts}
          >
              <option value="latest" >Latest</option>
              <option value="lowest">Убывание</option>
              <option value="highest">Возростание</option>
          </select>
        </div>
        <div className="filter_size">
          Фильтрация по размерам
          <select 
          value ={size}
          onChange={sizeProducts}
          >
              <option value="">All</option>
              <option value="X">X</option>
              <option value="S">S</option>
              <option value="M">M</option> 
              <option value="L">L</option> 
              <option value="XL">XL</option> 
              <option value="XXL">XXL</option> 
          </select>
        </div>

        <div className="filter_size">
         По цвету
          <select 
          value ={color}
          onChange={colorProducts}
          >
              <option value="">Все</option>
              <option value="red">Красный</option>
              <option value="blue">Синий</option>
              <option value="green">Зеленый</option> 
          </select>
        </div>
      </div>
    )
  }
}
