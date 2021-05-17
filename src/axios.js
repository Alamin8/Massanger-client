import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000'
    // baseURI: 'https://limitless-thicket-40874.herokuapp.com'
})

export default instance