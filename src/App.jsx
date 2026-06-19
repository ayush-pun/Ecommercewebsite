import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-zinc-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;``