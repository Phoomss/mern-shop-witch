import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Policy from "./page/Policy";
import PageNotFound from "./page/PageNotFound";
import Register from "./page/Auth/Register";
import Login from "./page/Auth/Login";
import Dashboard from "./page/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./page/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./page/Admin/AdminDashboard";
import CreateCategory from "./page/Admin/CreateCategory";
import CreateProduct from "./page/Admin/CreateProduct";
import AllUser from "./page/Admin/AllUser";
import Profile from "./page/user/Profile";
import Orders from "./page/user/Orders";
import Product from "./page/Admin/Product";
import UpdateProduct from "./page/Admin/UpdateProduct";
import Search from "./page/Search";
import ProductDetails from "./page/ProductDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/product" element={<Product/>} />
          <Route path="admin/all-user" element={<AllUser/>} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
