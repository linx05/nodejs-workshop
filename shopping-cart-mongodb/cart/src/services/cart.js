import RequestService from './request'

export default class CartService extends RequestService {
  constructor() {
    super('http://localhost:8080/api/cart')
  }

  async getCart() {
    return await this.makeRequest({
      url: '/',
      method: 'get',
    })
  }

  async addCartItem(id, data) {
    return await this.makeRequest({
      url: `/${id}`,
      method: 'post',
      data,
    })
  }

  async updateCartItem(id, data) {
    return await this.makeRequest({
      url: `/${id}`,
      method: 'put',
      data,
    })
  }

  async removeFromCart(id) {
    return await this.makeRequest({
      url: `/${id}`,
      method: 'delete',
    })
  }

  async emptyCart() {
    return await this.makeRequest({
      url: '/',
      method: 'delete'
    })
  }
}
