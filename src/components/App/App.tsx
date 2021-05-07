import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "../../Components/Footer";
import Header from "../Header";
import HomePage from "../HomePage";
import Navigation from "../Navigation";
import { AppComponent } from "./style";

const App = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const onClickHandler = () => {
    setToggleNavigation(!toggleNavigation);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Barlow:500,700"],
      },
    });
  }, []);

  return (
    <Router>
      <AppComponent>
        <Header toggleNavigation={onClickHandler} />
        <HomePage />
        <Footer />
        {toggleNavigation && <Navigation onClick={onClickHandler} />}
      </AppComponent>
    </Router>
  );
};

export default App;
