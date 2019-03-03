import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contexts from './contexts'
import Cart from './components/cart'
import Store from './components/store'
import NavBar from './components/navbar'
import ProductsService from './services/products'
import CartService from './services/cart'
import './App.css'

const { ProductsContext, CartContext } = Contexts

class App extends Component {
  constructor() {
    super()
    this.productsService = new ProductsService()
    this.cartService = new CartService()
    this.state = {
      products: [],
      cart: {items: [], total: 0}
    }
  }

  async componentDidMount() {
    await this.getProducts()
    await this.getCart()
  }

  getProducts = async () => {
    const products = await this.productsService.getProducts()
    this.updateProducts(products)
  }

  getCart = async () => {
    const cart = await this.cartService.getCart()
    this.updateCart(cart)
  }

  updateCart = cart => {
    this.setState({
      cart,
    })
  }

  updateProducts = products => {
    this.setState({
      products,
    })
  }

  render() {
    return (
      <div className="App">
        <ProductsContext.Provider
          value={
            {
              products: this.state.products,
              getCart: this.getCart,
              getProducts: this.getProducts,
              updateProducts: this.updateProducts,
            }
          }
        >
          <CartContext.Provider value={{ ...this.state.cart, getCart: this.getCart, updateCart: this.updateCart}}>
            <Router>
              <div>
                <NavBar />
                <div className="app-content">
                  <Switch>
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/" component={Store} />
                  </Switch>
                </div>
              </div>
            </Router>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </div>
    )
  }
}

export default App
