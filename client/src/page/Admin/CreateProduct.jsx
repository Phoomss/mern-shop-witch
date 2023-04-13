import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'

const CreateProduct = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("")

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/all-category");
      if (data?.success) {
        setCategory(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Someting went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title="Dashboard - Create-Product ">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct