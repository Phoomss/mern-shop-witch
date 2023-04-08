import React,{useState} from 'react'
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../Styles/Auth.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`/api/v1/auth/login`, {
          email,
          password,
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Somethig went worng");
      }
    };
  return (
    <Layout title="Login - Ecommer App">
    <div className="container-auth">
    <div className="login">
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />

        <button type="submit" >
          Login
        </button>
      </form>
    </div>
    </div>
   
  </Layout>
  )
}

export default Login