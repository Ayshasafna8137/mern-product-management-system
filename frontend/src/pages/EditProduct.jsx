import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditProduct = () => {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/products/" + id,
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

    };

    fetchProduct();

  }, [id]);

  const updateProduct = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.put(
      "http://localhost:5000/api/products/" + id,
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

      <h2>Edit Product</h2>

      <form onSubmit={updateProduct}>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button>Update</button>

      </form>

    </div>

  );

};

export default EditProduct;