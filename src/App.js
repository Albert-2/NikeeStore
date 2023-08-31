import "./App.css";
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
    </>
  );
}

export default App;
