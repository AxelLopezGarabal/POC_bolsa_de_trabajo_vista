import axios from 'axios'

const server = 'http://http://localhost/php_poc/src/backend/api/'

const API ={
    get: path => axios.get(`${server}${path}`).then(response => response),
    getAuth: (path, header) => axios.get(`${server}${path}`, header).then(response => response),
    post: (path, body) => axios.post(`${server}${path}`, body).then(res => res),
    put: (path, body) => axios.put(`${server}${path}`, body).then(console.log(body)),
    postAuth: (path, body, header) => axios.post(`${server}${path}`, body, header).then(res => {console.log(header); return res})
}
export default API;
