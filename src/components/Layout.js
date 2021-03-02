const Layout = ({ children, page }) => {
  return (
    <div>
      <header>
        <h1>Projeto {page}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h3>Todos os direitos reservados</h3>
      </footer>
    </div>
  );
};

export default Layout;
