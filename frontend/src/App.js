import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
          
          {/* <Route path="/product" element={<Product />}> */}

          <Route path="/" element = {<Home />}/>
          <Route path="/cart" element = {<Cart />}/>
         
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>

           {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/> */}

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

