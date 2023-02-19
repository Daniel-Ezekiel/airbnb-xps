import logo from '../assets/airbnb-logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Header;
