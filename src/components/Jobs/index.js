import React, { useState, useEffect } from 'react';
import './index.css';
import jobData from './data.json';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = jobData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSearchTerm('');
  };

  useEffect(() => {
    setSearchResults(jobData);
  }, []);

  return (
    <div className="search-page-container">
      <h1>Search a job</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter job title or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {searchResults.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <center>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
            Visit Company Website
          </a>
          </center>
            <img src={job.logoUrl} alt={job.company} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
