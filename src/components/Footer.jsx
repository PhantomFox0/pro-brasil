import Logo from './Logo';
import NavBar from './NavBar';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topo">
        <Logo />
        <NavBar className="footer-links" />
      </div>
      <p className="footer-copy">
        © 2026 EmpregaBrasil. Todos os direitos reservados. Feito com Figma em São Paulo, Brasil.
      </p>
    </footer>
  )
}

export default Footer;
