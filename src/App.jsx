import { Fragment, Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Last from "./components/LAst";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
      <Hero />
      <About />
      <Cards />
      <Gallery />
      <Profile />
      <Social />
      <Last />
      <Footer />
    </div>
  );
}

export default App;
