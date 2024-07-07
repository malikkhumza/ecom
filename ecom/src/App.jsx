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
import UserDashboard from "./pages/user/UserDashboard"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage"
import Mystate from './components/context/myState'
import toast from "react-hot-toast"

function App() {

  return (
    <Mystate>
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
          <Route path="/userdash" element={<UserDashboard/>}/>
          <Route path="/admindash" element={<AdminDashboard/>}/>
          <Route path="/addproduct" element={<AddProductPage/>}/>
          <Route path="/updateproduct" element={<UpdateProductPage/>}/>
          
        </Routes>
      <toast/>
      </Router>
    </Mystate>
  )
}

export default App
