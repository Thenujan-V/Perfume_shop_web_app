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
          
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/about" element = {<About />}/> */}

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