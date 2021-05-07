import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import Button from "../Button";
import Text from "../Text";
import { NavigationProps } from "./navigation";
import { Nav } from "./style";

const Navigation = ({ onClick }: NavigationProps) => {
  useLockBodyScroll();
  return (
    <Nav>
      <ul>
        <li onClick={onClick}>
          <Link to="/solucoes">
            <Text fontSize="medium" uppercase>
              Nossas soluções
            </Text>
          </Link>
        </li>
        <li onClick={onClick}>
          <Link to="/jussi">
            <Text fontSize="medium" uppercase>
              Conheça a Jüssi
            </Text>
          </Link>
        </li>
      </ul>

      <Button
        renderMode="only-icon"
        className="SearchTrigger"
        onClick={onClick}
      >
        <CloseIcon width="40" height="40" />
      </Button>
    </Nav>
  );
};

export default Navigation;
