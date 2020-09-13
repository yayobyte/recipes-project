import axios from "axios";

const API = axios.create({
    baseURL: "https://cdn.contentful.com/spaces/kk2bw5ojx476/environments/master/",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    }
});

export default API;