import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About";
import Shop from "./Pages/FilterPage";
import Checkout from "./Pages/Checkout";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>

<<<<<<< HEAD

          {/* <Route path="/" element = {<Home />}/> */}
          {/* <Route path="/" element = {<Cart />}/> */}
         

          <Route path="/" element = {<Home />}/>

=======
>>>>>>> 3a286b1859fde0c636d4fdbcf150e00a82b2680c
          


          <Route path="/" element = {<Home />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element = {<Cart />}/>
          <Route path="/about" element = {<About />}/>
<<<<<<< HEAD

          <Route path="/product" element={<Product />}/>  
          

=======
>>>>>>> 3a286b1859fde0c636d4fdbcf150e00a82b2680c
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>

          </Route>
          <Route path="/checkout" element={<Checkout/>}/>
<<<<<<< HEAD





  

=======
>>>>>>> 3a286b1859fde0c636d4fdbcf150e00a82b2680c
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

