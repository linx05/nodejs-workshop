import uuid from 'uuid/v1'

export default class UserService {
  getUserId() {
    const localId = localStorage.getItem('userId')
    if (localId) {
      return localId
    }
    const newUserId = uuid()
    localStorage.setItem('userId', newUserId)
    return newUserId
  }
}
