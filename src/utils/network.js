import axios from 'axios';

function networkServices() {
    const headers = {
        Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
    }

    const postData = (body, url,token) => {
        // headers["Authorization"] =  "Bearer " + token;
        const config = { headers };
        return axios.post(url, body, config)
    }

    const getData = (url,token) => {
        const config = { headers };
        return axios.get(url, config)
    }

    return {
        postData,
        getData
    }
}

const network = networkServices();

export default network;