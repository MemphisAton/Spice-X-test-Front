import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ec2-51-20-136-212.eu-north-1.compute.amazonaws.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;