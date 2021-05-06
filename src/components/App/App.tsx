import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Banner from "../Banner";
import Header from "../Header";
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
      </AppComponent>
    </Router>
  );
};

export default App;
