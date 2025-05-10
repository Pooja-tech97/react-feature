import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <p>---- test1 heading ----</p>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <br />
          <p> test1 - username field</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Login</button>
        <p>test1: Please enter valid credentials</p>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
