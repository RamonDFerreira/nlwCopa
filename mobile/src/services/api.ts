import axios from 'axios'

export const api = axios.create({
  //baseURL: 'http://172.17.10.13:3333' 
  baseURL: 'http://192.168.1.105:3333'  
})