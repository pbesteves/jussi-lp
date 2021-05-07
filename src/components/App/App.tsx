import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "../../Components/Footer";
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Header from "../Header";
import Navigation from "../Navigation";
import Newsletter from "../Newsletter";
import Solutions from "../Solutions";
import Stores from "../Stores";
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
        <Banner />
        <Stores />
        <Solutions />
        <About />
        <Contact />
        <Newsletter />
        <Footer />
        {toggleNavigation && <Navigation onClick={onClickHandler} />}
      </AppComponent>
    </Router>
  );
};

export default App;
