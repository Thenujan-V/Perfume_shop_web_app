import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
<<<<<<< HEAD
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Nav from '../Components/Nav/Nav'
import ShopCategory from "./Pages/ShopCategory/ShopCategory";

=======
import About from "./Pages/About";

import Cart from "./Pages/Cart";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
>>>>>>> 1646534b8e9deca1638b91c5f332f6995405045b


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
<<<<<<< HEAD
          <Route path="/" element = {<Home />}/>
          {/* <Route path="/cart" element = {<Cart />}/> */}
          {/* <Route path="/shop" element={<ShopCategory />}>
            <Route path=":productGender" element={<ShopCategory banner={}/>}></Route>
          </Route> */}
          <Route path="/product" element={<Product />}>
=======

          <Route path="/" element = {<Home />}/>
          <Route path="/cart" element = {<Cart />}/>
         
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>

          {/* <Route path="/product" element={<Product />}>
>>>>>>> 1646534b8e9deca1638b91c5f332f6995405045b
          <Route path=":productId" element={<Product />}/>

          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

