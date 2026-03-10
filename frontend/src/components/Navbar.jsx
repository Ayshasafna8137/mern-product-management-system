import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/"); // go to login page

  };

  return (

    <div className="navbar">

      <h2>Product App</h2>

      <div className="nav-links">

        <Link to="/products">Products</Link>

        {user?.role === "admin" && (
          <Link to="/add-product">Add Product</Link>
        )}

        <button onClick={handleLogout}>Logout</button>

      </div>

    </div>

  );

};

export default Navbar;