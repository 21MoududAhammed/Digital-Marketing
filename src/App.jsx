import Brands from "./components/Brands";
// import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PositiveIntroduction from "./components/PositiveIntroduction";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      {/* <FeaturedWork /> */}
      <Header/>
      <Brands />
      <PositiveIntroduction />
      <Pricing />
      <Footer />
    </>
  );
}
