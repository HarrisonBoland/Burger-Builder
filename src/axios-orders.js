import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-my-burger-cc0d3.firebaseio.com/'
});

export default instance;