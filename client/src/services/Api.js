// Connector which is going to hit the backend

import axios from 'axios'

export default () => {
  // returns a connector
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
