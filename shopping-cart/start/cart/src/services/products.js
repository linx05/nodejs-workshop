import RequestService from './request'

export default class ProductsService extends RequestService {
  constructor() {
    super('http://localhost:8080/api/products')
  }

  async getProducts() {
    return await this.makeRequest({
      url: '/',
      method: 'get',
    })
  }

  async getProduct(id) {
    return await this.makeRequest({
      url: `/${id}`,
      method: 'get',
    })
  }
}
