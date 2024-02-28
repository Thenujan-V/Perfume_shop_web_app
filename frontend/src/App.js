import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
// <<<<<<< HEAD
import Cart from "./Pages/Cart";

// =======
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// >>>>>>> f5503d6bbb841c05be5aba730095bc2fec309261

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
{/* <<<<<<< HEAD */}
          {/* <Route path="/" element = {<Home />}/> */}
          <Route path="/" element = {<Cart />}/>
         
=======
          <Route path="/" element = {<Home />}/>

          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>

{/* >>>>>>> f5503d6bbb841c05be5aba730095bc2fec309261 */}
          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
