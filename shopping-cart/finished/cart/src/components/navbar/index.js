import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap'
import { CartContext } from '../../contexts/cart'
import CartIcon from '../common/cartIcon'

export default class NavigationBar extends Component {
  static contextType = CartContext

  render() {
    return (<div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Online Store</Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/cart"><CartIcon cart={this.context} /></Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>)
  }
}
