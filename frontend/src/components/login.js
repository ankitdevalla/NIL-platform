import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would integrate with Auth0 or your backend
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link> {/* Add this line for the sign-up link */}
      </p>
    </form>
  );
};

export default Login;
