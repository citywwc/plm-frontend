import axios from 'axios';
import http from 'http';

export const instance = axios.create({
  baseURL: 'http://whplm-test.csot.tcl.com',
  method: 'POST',
  timeout: 5000,
  // headers: {
  //   'Content-Type':'application/x-www-form-urlencoded',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'POST,GET',
  //   'Access-Control-Allow-Credentials': 'true'
  // },
  httpAgent: new http.Agent({ keepAlive: true }),
  responseType: "text",
  withCredentials: true
});
