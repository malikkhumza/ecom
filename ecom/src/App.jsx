import {BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import NoPage from "./pages/noPage/NoPage"
import ProductInfo from "./components/productInfo/ProductInfo"
import ScrollTop from "./components/scrollTop/ScrollTop"
import CartPage from "./pages/cart/CartPage"
import AllProduct from "./pages/allProductPage/AllProduct"
import Login from "./pages/registeration/Login"
import Signup from "./pages/registeration/Signup"

function App() {

  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
          <Route path="/product-info" element={<ProductInfo/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
        </Routes>

      </Router>
    </div>
  )
}

export default App
