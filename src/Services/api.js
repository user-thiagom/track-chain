import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:3333/"
})


/*export const api = axios.create({
    baseURL:"http://localhost:8085/rastreio/"
})*/