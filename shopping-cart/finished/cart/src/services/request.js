import axios from 'axios'
import UserService from './user'

export default class RequestService {
  constructor(baseUrl = 'http://localhost:8080/api') {
    this.baseUrl = baseUrl
    this.userService = new UserService()
  }

  async makeRequest({ url, method = 'get', data }) {
    try {
      const response = await axios({
        url: this.baseUrl + url,
        method,
        data,
        headers: { userId: this.userService.getUserId() }
      })
      return response.data
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
