import http from "../config/http";

const getServiceCursos = () => http.get("/");

// const createServiceCurso = (data) => http.post('/curso/create', data);

export { getServiceCursos };
