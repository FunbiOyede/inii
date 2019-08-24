// configurations for axios
import axios from 'axios';

const AxiosInstance =  axios.create({
    baseURL:'https://iniibookmark.firebaseio.com/'
})

export default AxiosInstance;