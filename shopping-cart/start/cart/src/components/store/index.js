import React, { Component } from 'react'
import { ProductsContext } from '../../contexts/products'
import ProductList from '../common/productList'
import ProductsService from '../../services/products'
import CartService from '../../services/cart'
import './index.css'

export default class Store extends Component {
  static contextType = ProductsContext
  constructor() {
    super()
    this.productsService = new ProductsService()
    this.cartService = new CartService()
  }

  async componentDidMount() {
    const products = await this.productsService.getProducts()
    this.context.updateProducts(products)
  }


  onAddProductToCart = async id => {
    await this.cartService.addCartItem(id, { qty: 1 })
    this.context.getCart()
  }

  render() {
    return (<div className="products">
      <ProductList
        products={this.context.products}
        onAddProduct={this.onAddProductToCart}
      />
    </div>)
  }
}
