import "./index.css";
import Wrapper from "./components/Wrapper";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Router from "./components/Router/Router";

const App = () => {
  return (
    <>
      <Appbar />
      <Wrapper>
        <Router />
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
