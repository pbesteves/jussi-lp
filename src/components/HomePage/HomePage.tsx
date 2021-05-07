import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Newsletter from "../Newsletter";
import Solutions from "../Solutions";
import Stores from "../Stores";

const HomePage = () => {
    return (
      <>
        <Banner />
        <Stores />
        <Solutions />
        <About />
        <Contact />
        <Newsletter />
      </>
    );
}

export default HomePage
