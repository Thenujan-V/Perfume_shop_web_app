import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";

import Cart from "./Pages/Cart";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element = {<Home />}/>
          <Route path="/cart" element = {<Cart />}/>
         
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>

          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>

          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// background #630229
// F07EAF