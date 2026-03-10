import { useState } from "react";
import axios from "axios";

const API_URL = "https://mern-product-management-system-1.onrender.com";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        `${API_URL}/api/auth/register`,
        {
          name: name,
          email: email,
          password: password
        }
      );

      alert("User Registered Successfully");

      window.location = "/";

    } catch (error) {

      alert(
        error.response?.data?.message || "Registration failed"
      );

    }

  };

  return (

    <div className="container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

      </form>

    </div>

  );

};

export default Register;