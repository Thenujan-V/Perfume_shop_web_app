import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          {/* <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
