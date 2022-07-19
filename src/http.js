import axios from 'axios'

const url = 'https://huawei-tac-test.herokuapp.com'

const http = axios.create({
  baseURL: url
})

export { http, url }
