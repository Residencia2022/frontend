import axios from 'axios'

const url = 'https://huawei-tac-mexico-api.azurewebsites.net'

const http = axios.create({
  baseURL: url
})

export { http, url }
