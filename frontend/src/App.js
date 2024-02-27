import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
<<<<<<< HEAD
import About from "./Pages/About";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
=======
// import Nav from '../Components/Nav/Nav'
import ShopCategory from "./Pages/ShopCategory/ShopCategory";


import About from "./Pages/About";
import ShowProducts from "./Pages/ShowProducts";
import Shop from "./Pages/shop";


// import Cart from "./Pages/Cart";

// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
>>>>>>> 550da99557e08d8e2a887786f53a65098e3d5cdd


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
<<<<<<< HEAD
          
          {/* <Route path="/product" element={<Product />}> */}

=======
          <Route path="/shop" element={<Shop />}/>
          {/* <Route path="/cart" element = {<Cart />}/> */}
          {/* <Route path="/shop" element={<ShopCategory />}>
            <Route path=":productGender" element={<ShopCategory banner={}/>}></Route>
          </Route> */}
          {/* <Route path="/showProducts" element={<ShowProducts />}/>
>>>>>>> 550da99557e08d8e2a887786f53a65098e3d5cdd
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

<<<<<<< HEAD
           {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/> */}
=======
          {/* <Route path="/product" element={<Product />}>
>>>>>>> 1646534b8e9deca1638b91c5f332f6995405045b
>>>>>>> f4389a20d8b3ea8cd5dad6b7e247c1b719ce695c
          <Route path=":productId" element={<Product />}/>
>>>>>>> 550da99557e08d8e2a887786f53a65098e3d5cdd

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

