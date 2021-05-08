import React, { lazy, Suspense, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as JussiLogo } from "../../assets/icons/jussi.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Button from "../Button";
import NavBar from "../NavBar";
import SearchBar from "../Search";
import { HeaderProps } from "./header";
import { HeaderComponent } from "./style";

const SearchBarMobile = lazy(() => import("../Search"));

const Header = ({ toggleNavigation }: HeaderProps) => {
  const [expandSearch, setExpandSearch] = useState(false);

  return (
    <>
      <HeaderComponent>
        <Button
          renderMode="only-icon"
          className="MenuTrigger"
          onClick={toggleNavigation}
        >
          <MenuIcon />
        </Button>
        <JussiLogo width={130} className="Logo" />
        <NavBar className="Navigation" />
        <SearchBar />
        <Button renderMode="only-text" className="LoginTrigger">
          Login
        </Button>
        <Button
          renderMode="only-icon"
          className="CartTrigger"
          aria-label="Toggle search bar"
        >
          <CartIcon />
        </Button>
        <Button
          renderMode="only-icon"
          className="SearchTrigger"
          onClick={() => setExpandSearch(!expandSearch)}
        >
          <SearchIcon />
        </Button>
      </HeaderComponent>
      {expandSearch && (
        <Suspense fallback="">
          <SearchBarMobile expanded={expandSearch} />
        </Suspense>
      )}
    </>
  );
};

export default Header;
