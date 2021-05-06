import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Header from "../Header";
import Newsletter from "../Newsletter";
import Solutions from "../Solutions";
import Stores from "../Stores";
import { AppComponent } from "./style";

const App = () => {
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
        <Header />
        <Banner />
        <Stores />
        <Solutions />
        <About />
        <Contact />
        <Newsletter />
      </AppComponent>
    </Router>
  );
};

export default App;
