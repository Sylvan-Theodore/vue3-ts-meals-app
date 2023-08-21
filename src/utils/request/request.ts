import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASEURL as string | undefined,
    timeout: 10000,
});


export default service