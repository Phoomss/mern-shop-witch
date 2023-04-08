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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
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
