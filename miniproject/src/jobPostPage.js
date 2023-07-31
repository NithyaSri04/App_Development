// JobPostPage.js
import React from 'react';
import JobForm from './JobForm';

const JobPostPage = () => {
  const handleJobSubmit = (job) => {
    // Here, you can handle the job submission, e.g., make an API call to post the job
    console.log('Job submitted:', job);
  };

  return (
    <div>
      <h1>Post a Job</h1>
      <JobForm onSubmit={handleJobSubmit} />
    </div>
  );
};

export default JobPostPage;
