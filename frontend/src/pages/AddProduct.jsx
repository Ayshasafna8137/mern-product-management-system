import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://mern-product-management-system-1.onrender.com";

const AddProduct = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/");
      return;
    }

    try {

      await axios.post(
        `${API_URL}/api/products`,
        { name, description, price, category },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Product added successfully");

      navigate("/products");

    } catch (error) {

      alert(error.response?.data?.message || "Failed to add product");

    }

  };

  return (

    <div className="container">

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>

      </form>

    </div>

  );

};

export default AddProduct;