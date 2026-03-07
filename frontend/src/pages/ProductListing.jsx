import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const fetchProducts = async () => {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/products",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProducts(res.data);

    };

    fetchProducts();

  }, []);

  const deleteProduct = async (id) => {

    const token = localStorage.getItem("token");

    await axios.delete(
      "http://localhost:5000/api/products/" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setProducts(products.filter(p => p._id !== id));

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