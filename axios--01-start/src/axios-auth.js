import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://vuejs-axios-8d8b6.firebaseio.com'
})
instance.defaults.headers.common['SOMETHING']= 'something'

export default instance