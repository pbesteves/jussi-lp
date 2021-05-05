import { Link } from "react-router-dom";
import { NavbarProps } from "./navbar";
import { NavbarComponent } from "./style";

const NavBar = ({ className }: NavbarProps) => {
  return (
    <NavbarComponent className={className}>
      <li>
        <Link to="/solucoes">Nossas soluções</Link>
      </li>
      <li>
        <Link to="jussi">Conheça a Jüssi</Link>
      </li>
    </NavbarComponent>
  );
};

export default NavBar;
