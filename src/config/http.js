import axios from "axios"; // dependecia

//URL da API
const urlApi = process.env.REACT_APP_API;
// const urlApi = "https://next.json-generator.com/api/json/get/4JR6uPZMc";

//Criando client http atraves do AXIOS
const http = axios.create({
  baseURL: urlApi,
});

//Definindo o header padrao da app
http.defaults.headers["content-type"] = "application/json";

export default http;
