import "../styles/components/Header.scss";
import Logo from "../images/harry-potter-logo.png";
const Header = () => {
  return (
    <header className="header">
      {/* <h1>Harry Potter</h1> */}
      <img className="header__logo" alt="Harry Potter" src={Logo} />
    </header>
  );
};

export default Header;
