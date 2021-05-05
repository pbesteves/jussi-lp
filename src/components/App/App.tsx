import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "../Header";
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
      </AppComponent>
    </Router>
  );
};

export default App;
