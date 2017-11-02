import Api from '@/services/Api'

// object that returns register method which will hit that register Api
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
