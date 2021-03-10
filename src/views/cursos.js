import React, { useState, useEffect } from "react";
import { getServiceCursos } from "../services/curso.service";

const Cursos = () => {
  // const [valorAtual, funcaoQueMudaOValor ] = React.useState();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const getCursos = async () => {
      const res = await getServiceCursos();
      // console.log("%%%", res);
      setCursos(res.data);
    };
    getCursos();
  });

  return (
    <div className="cursos">
      <ul>
        {cursos.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Cursos;
