import axios from "axios";

const instance = axios.create({
    // API Cloud URL (cloud function)
    baseURL: "http://localhost:5001/clone-84dd3/us-central/api"
});

export default instance;
