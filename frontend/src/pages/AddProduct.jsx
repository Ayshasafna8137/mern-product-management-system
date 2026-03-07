import { useState } from "react";
import axios from "axios";

const AddProduct = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/products",
      { name, description, price, category },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    window.location = "/products";

  };

  return (

    <div className="container">

      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button>Add</button>

      </form>

    </div>

  );

};

export default AddProduct;