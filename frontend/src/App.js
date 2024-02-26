import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>

          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
