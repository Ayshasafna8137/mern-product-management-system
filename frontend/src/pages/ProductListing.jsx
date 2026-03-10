import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://mern-product-management-system-1.onrender.com";

const ProductListing = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const fetchProducts = async () => {

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/");
        return;
      }

      try {

        const res = await axios.get(
          `${API_URL}/api/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setProducts(res.data);

      } catch (error) {

        if (error.response?.status === 401) {

          alert("Session expired. Please login again.");

          localStorage.clear();

          navigate("/");

        } else {

          alert("Failed to load products");

        }

      }

    };

    fetchProducts();

  }, [navigate]);

  const deleteProduct = async (id) => {

    const token = localStorage.getItem("token");

    try {

      await axios.delete(
        `${API_URL}/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProducts(products.filter(p => p._id !== id));

    } catch (error) {

      alert("Delete failed");

    }

  };

  return (

    <div className="page">

      <div className="header">

        <h2 className="title">Products</h2>

        <div className="header-buttons"></div>

      </div>

      <div className="product-grid">

        {products.map(product => (

          <div key={product._id} className="product-card">

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p className="price">${product.price}</p>

            {user?.role === "admin" && (

              <div className="card-buttons">

                <button
                  className="btn-edit"
                  onClick={() => navigate(`/edit/${product._id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>

  );

};

export default ProductListing;