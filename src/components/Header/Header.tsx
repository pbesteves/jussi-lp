import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as JussiLogo } from "../../assets/icons/jussi.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Button from "../Button";
import NavBar from "../NavBar";
import SearchBar from "../Search";
import { HeaderComponent } from "./style";

const Header = () => {
  return (
    <HeaderComponent>
      <Button renderMode="only-icon" className="MenuTrigger">
        <MenuIcon />
      </Button>
      <JussiLogo width={130} className="Logo" />
      <NavBar className="Navigation" />
      <SearchBar />
      <Button renderMode="only-text" className="LoginTrigger">
        Login
      </Button>
      <Button renderMode="only-icon" className="CartTrigger">
        <CartIcon />
      </Button>
      <Button renderMode="only-icon" className="SearchTrigger">
        <SearchIcon />
      </Button>
    </HeaderComponent>
  );
};

export default Header;
