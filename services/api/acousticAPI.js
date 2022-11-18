import axios from "axios"
import acousticHelper from "@services/utilities/acousticHelper"

const https = require('https');

const acousticClient = axios.create({ baseURL: acousticHelper.apiUrl, headers: {'Content-Type': 'application/json; charset=utf-8'}, httpsAgent: new https.Agent({  
  rejectUnauthorized: false
})})

// Expose only required methods
const acousticAPI = {
  get: acousticClient.get,
  post: acousticClient.post
}

export default acousticAPI