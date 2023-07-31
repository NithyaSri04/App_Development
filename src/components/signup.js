import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ handleSwitchPage }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!firstname || !lastname || !email || !password || password !== confirmPassword) {
      setErrorMessage('Please enter all fields and make sure passwords match');
      return;
    }

    // Perform signup logic here
    try {
      const response = await axios.post('/postsignup', {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      });
      console.log(response.data); // If needed, handle the response from the backend

      // Clear form inputs
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Call parent component's handleSwitchPage function
      handleSwitchPage();
    } catch (error) {
      console.error('Error submitting signup:', error);
      // Handle any error that occurs during the POST request
    }
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="switch-page">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
