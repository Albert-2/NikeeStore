import "./App.css";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OfferSectn from "./components/OfferSectn";
import PopulPrdct from "./components/PopulPrdct";
import Shoe from "./components/Shoe";
import ShoeDetail from "./components/ShoeDetail";
import ReviewsSectn from "./components/ReviewsSectn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shoe />
      <PopulPrdct />
      <ShoeDetail />
      <Features />
      <OfferSectn />
      <ReviewsSectn />
      <SignUp />
    </>
  );
}

export default App;
