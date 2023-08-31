import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopulPrdct from "./components/PopulPrdct";
import Shoe from "./components/Shoe";
import ShoeDetail from "./components/ShoeDetail";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shoe />
      <PopulPrdct />
      <ShoeDetail />
      <Features />
    </>
  );
}

export default App;
