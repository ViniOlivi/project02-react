import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = (props) => {
  document.title = props.nomdeDaPagina;
  return (
    <div>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Layout;
