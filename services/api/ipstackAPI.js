import axios from "axios"
import ipstackHelper from "@services/utilities/ipstackHelper"

const ipstackClient = axios.create({ baseURL: ipstackHelper.apiUrl, headers: {'Content-Type': 'application/json; charset=utf-8'}})

// Expose only required methods
const ipstackAPI = {
  get: ipstackClient.get,
  post: ipstackClient.post
}

export default ipstackAPI