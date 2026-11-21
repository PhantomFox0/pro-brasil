import { NavLink } from "react-router-dom";

function NavBar({ className }) {
  return (
    <nav className={className}>
      <NavLink to="/">Página Inicial</NavLink>
      <NavLink to="/curriculo">Currículo</NavLink>
      <NavLink to="/vagas">Vagas</NavLink>
      <NavLink to="/perfil">Perfil</NavLink>
    </nav>
  );
}

export default NavBar;
