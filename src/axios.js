import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tinderidhoo.herokuapp.com"
})
export default instance;