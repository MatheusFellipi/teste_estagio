import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://my-json-server.typicode.com/naveteam/fake-api/navers',
})

export default axios