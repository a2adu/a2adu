import logo from "./logo.svg";
import "./App.css";
import "./Styles.css";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import ContainerMenu from "./components/ContainerMenu";
import Infobar from "./components/Infobar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <>
        <Header />
        <TopNav />
        <ContainerMenu />
        <Infobar />
        <Footer />
        <Newsletter />
        <FooterBottom />
      </>
    </div>
  );
}

export default App;
