import React, { useState } from 'react';
import './savejobs.css';

const SaveJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Function to save a job
  const saveJob = (job) => {
    // Check if the job is already saved
    const existingJob = savedJobs.find(savedJob => savedJob.id === job.id);
    if (existingJob) {
      console.log("Job is already saved.");
      return;
    }

    // Add the job to the saved jobs array
    setSavedJobs([...savedJobs, job]);
    console.log("Job saved successfully.");
  };

  // Function to remove a saved job
  const removeSavedJob = (jobId) => {
    // Filter out the job with the given jobId from the saved jobs array
    const updatedSavedJobs = savedJobs.filter(job => job.id !== jobId);
    setSavedJobs(updatedSavedJobs);
    console.log("Job removed from saved jobs.");
  };

  // Sample data for jobs (you can fetch this data from an API)
  const jobsData = [
    { id: 1, title: 'Software Engineer', description: 'Job description for Software Engineer' },
    { id: 2, title: 'Testing Engineer', description: 'Job description for Testing Engineer' },
    { id: 3, title: 'Data Analyst', description: 'Job description for Data Analyst' },
    { id: 4, title: 'Product Manager', description: 'Job description for Product Manager' },
    { id: 5, title: 'Project Manager', description: 'Job description for Project Manager' },
    { id: 6, title: 'Web Developer', description: 'Job description for Web Developer' },
    { id: 7, title: 'Network Engineer', description: 'Job description for Network Engineer' },
    { id: 8, title: 'System Analyst', description: 'Job description for System Analyst' },
    { id: 9, title: 'Database Analyst', description: 'Job description for Database Analyst' },
  ];

  return (
    <div className="savejobs-container">
      <h1>Saved Jobs</h1>
      {jobsData.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          {/* Save/Remove buttons */}
          {savedJobs.find(savedJob => savedJob.id === job.id) ? (
            <button className="savejobs-button remove-job-btn" onClick={() => removeSavedJob(job.id)}>Remove from Saved</button>
          ) : (
            <button className="savejobs-button save-job-btn" onClick={() => saveJob(job)}>Save Job</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SaveJobs;
