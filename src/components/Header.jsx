import Logo from './Logo';
import NavBar from './NavBar';


function Header() {
  return (
    <header className="header">
      <Logo />
      {/* Links do header para as páginas */}
      <NavBar className="menu" />
    </header>
  )
}

export default Header;
