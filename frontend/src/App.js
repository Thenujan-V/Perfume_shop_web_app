import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>

          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>

          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
