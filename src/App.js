import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Pages/Carousel/Carousel";
import HeaderPage from "./pages/HeaderPages/HeaderPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import SliderPage from "./pages/SliderPage/SliderPage";

function App() {
  return (
    <div>
      <HeaderPage />
      <SliderPage />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
