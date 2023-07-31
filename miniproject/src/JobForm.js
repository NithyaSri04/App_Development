// JobForm.js
import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (jobTitle.trim() === '' || jobDescription.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    // Construct the job object to be submitted
    const job = {
      title: jobTitle,
      description: jobDescription,
    };

    // Pass the job object to the parent component (e.g., JobPostPage)
    onSubmit(job);

    // Clear the form fields
    setJobTitle('');
    setJobDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
