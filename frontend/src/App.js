import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About";
import Shop from "./Pages/FilterPage";
import Nav from "./Components/Nav/Nav";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          

          <Route path="/" element = {<Home />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element = {<Cart />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
          </Route>


  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

