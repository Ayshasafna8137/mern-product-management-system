import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "http://localhost:5000/api/auth/register",
      { name, email, password }
    );

    alert("User Registered");

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
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Register</button>

      </form>

    </div>

  );

};

export default Register;