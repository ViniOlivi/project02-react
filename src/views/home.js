import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  // const [valorAtual, funcaoQueMudaOValor ] = React.useState();
  const [name, setName] = React.useState("Vini Olivi");

  const mudarNome = () => {
    setName("Vinicius Olivi");
  };

  return (
    <Layout page="Home">
      <div className="services">
        {name}
        <ul>
          <li>Financiamento Imobiliario</li>
          <li>Financiamento de Autos</li>
          <li>Credito Pessoal</li>
          <li>Credito Consignado</li>
        </ul>
        <hr />
        <button onClick={mudarNome}>Click Me</button>
      </div>
    </Layout>
  );
};

export default Home;
