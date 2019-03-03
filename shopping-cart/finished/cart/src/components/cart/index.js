import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import { CartContext } from '../../contexts/cart'
import CartProductList from '../common/cartProductList'
import CartService from '../../services/cart'
import './index.css'

export default class Cart extends Component {
  static contextType = CartContext
  constructor(props) {
    super(props)
    this.cartService = new CartService()
  }


  onChangeQuantity = async (id, e) => {
    const qty = e.target.value
    const cart = await this.cartService.updateCartItem(id, { qty })
    this.context.updateCart(cart)
  }

  onDeleteItem = async id => {
    const cart = await this.cartService.removeFromCart(id)
    this.context.updateCart(cart)
  }

  onClearCart = async () => {
    const cart = await this.cartService.emptyCart()
    this.context.updateCart(cart)
  }

  render() {
    return (<div className="cart-container">
      <Row>
        <Col sm="6" md="8">
          <Card>
            <CardTitle>Products</CardTitle>
            <CardBody>
              {
                this.context.items.length > 0 ? (<CartProductList
                  items={this.context.items}
                  onChangeQuantity={this.onChangeQuantity}
                  onDelete={this.onDeleteItem}
                />): (<h1>No items in your cart!</h1>)
              }
              {
                this.context.items.length > 0 && (<div className="clear-cart-container">
                    <Button onClick={this.onClearCart} color="danger">Clear Cart</Button>
                  </div>
                )
              }
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" md="4">
          <Card>
            <CardTitle>Totals</CardTitle>
            <CardBody>
              Total: ${Number.parseInt(this.context.total).toFixed(2)}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}
