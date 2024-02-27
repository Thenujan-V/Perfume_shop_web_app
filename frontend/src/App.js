import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Nav from '../Components/Nav/Nav'
import ShopCategory from "./Pages/ShopCategory/ShopCategory";


import About from "./Pages/About";
import ShowProducts from "./Pages/ShowProducts";
import Shop from "./Pages/shop";


// import Cart from "./Pages/Cart";

// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
          <Route path="/shop" element={<Shop />}/>
          {/* <Route path="/cart" element = {<Cart />}/> */}
          {/* <Route path="/shop" element={<ShopCategory />}>
            <Route path=":productGender" element={<ShopCategory banner={}/>}></Route>
          </Route> */}
          {/* <Route path="/showProducts" element={<ShowProducts />}/>
          <Route path="/" element = {<Home />}/>
          <Route path="/cart" element = {<Cart />}/>
<<<<<<< HEAD
          
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/about" element = {<About />}/> */}

      {/* <Route path="/product" element={<Product />}>
=======
         
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>

          {/* <Route path="/product" element={<Product />}>
>>>>>>> 1646534b8e9deca1638b91c5f332f6995405045b
>>>>>>> f4389a20d8b3ea8cd5dad6b7e247c1b719ce695c
          <Route path=":productId" element={<Product />}/>

          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

