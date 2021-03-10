const Header = (props) => {
  return (
    <header>
      <div className="logo">
        {/* <img src="./img/boxes/logo4.svg" alt="" /> */}
      </div>
      <div className="menu">
        <ul>
          <li>
            {" "}
            <a href="./" class="active">
              personal
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/services">services</a>
          </li>

          <li>
            {" "}
            <a href="/about">about us</a>
          </li>
        </ul>
      </div>
      {/* <li></li>
        <Link to="/about">About</Link> */}
    </header>
  );
};

export default Header;
