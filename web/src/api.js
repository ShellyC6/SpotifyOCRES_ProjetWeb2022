import axios from "axios";

//const xhr = new XMLHttpRequest();
const baseURL = "http://localhost:4000/";

const apiClient = axios.create({
    baseURL: baseURL
});

export default apiClient;

/*xhr.open("GET", baseURL);
xhr.onreadystatechange = someHandler;
xhr.send();*/