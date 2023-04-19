import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Collection from "./Components/Collection";
import Feature from "./Components/Feature";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="feature" element={<Feature />} />
          <Route path="productdetails" element={<ProductDetails />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
