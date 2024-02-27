import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import Nav from '../Components/Nav/Nav'
import ShopCategory from "./Pages/ShopCategory/ShopCategory";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
          <Route path="/" element = {<Home />}/>
          {/* <Route path="/cart" element = {<Cart />}/> */}
          {/* <Route path="/shop" element={<ShopCategory />}>
            <Route path=":productGender" element={<ShopCategory banner={}/>}></Route>
          </Route> */}
          <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// background #630229
// F07EAF