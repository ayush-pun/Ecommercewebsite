import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./component/Navbar";
import Demo from "./component/demo";
import Clock from "./component/Demo2";
import ApiPractice from "./Practice1/ApiPractice";
import DataDisplay from "./customhook/DataDisplay";

const App = () => {
  return (
 
     <div>
      <DataDisplay/>
      </div>

     
  );
};

export default App;