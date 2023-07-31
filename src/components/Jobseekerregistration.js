import React, { useState } from 'react';
import './Jobseekerregistration.css';
import { Link } from 'react-router-dom';

const JobSeekerRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();

    // Perform registration logic here
    // For this example, we are just logging the input data
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Resume:', resume);

    // Clear form fields after registration (optional)
    setEmail('');
    setPassword('');
    setFullName('');
    setPhoneNumber('');
    setResume(null);
  };

  return (
    <div className="jobseeker-registration-form">
      <h2>Job Seeker Registration</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Register</button>
        <Link to="/jobs">Jobs</Link>
      </form>
    </div>
  );
};

export default JobSeekerRegistration;
