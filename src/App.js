import logo from "./logo.svg";
import "./App.css";
import HeaderPage from "./pages/HeaderPages/HeaderPage";
import AboutUs from "./pages/AboutUs/AboutUs";

import SliderPage from "./pages/SliderPage/SliderPage";

function App() {
  return (
    <div>
      <HeaderPage />
      <SliderPage />
      <AboutUs />
    </div>
  );
}

export default App;
