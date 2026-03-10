import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://mern-product-management-system-1.onrender.com";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      const token = localStorage.getItem("token");

      try {

        const res = await axios.get(
          `${API_URL}/api/products/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setCategory(res.data.category);

      } catch (error) {

        alert("Failed to load product");

      }

    };

    fetchProduct();

  }, [id]);

  const updateProduct = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    try {

      await axios.put(
        `${API_URL}/api/products/${id}`,
        { name, description, price, category },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Product updated successfully");

      navigate("/products");

    } catch (error) {

      alert("Update failed");

    }

  };

  return (

    <div className="container">

      <h2>Edit Product</h2>

      <form onSubmit={updateProduct}>

        <input
          placeholder="Product Name"
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
          type="number"
          placeholder="Price"
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

        <button type="submit">Update</button>

      </form>

    </div>

  );

};

export default EditProduct;