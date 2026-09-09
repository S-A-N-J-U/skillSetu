import React, { useEffect, useState } from 'react';
import HireMe from '../components/HireMe/HireMe';
import { fetchJobs } from '../services/jobService';

export default function FindJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadJobs() {
      try {
        setLoading(true);
        const jobData = await fetchJobs({ search: 'React' });
        if (isMounted) {
          setJobs(jobData);
        }
      } catch (error) {
        console.error('Error loading jobs:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadJobs();

    return () => {
      isMounted = false;
    };
  }, []); 
  if (loading) {
    return <div className="text-center p-10 font-medium">Loading listings...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Developer Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <HireMe
            key={job.slug || job.id}
            name={job.company_name}
            title={job.title}
            tag1={job.remote ? 'Remote' : 'On-site'}
            tag2={job.tags?.[0] || 'Full-Time'}
            src={`https://logo.clearbit.com/${job.company_name?.replace(/\s+/g, '').toLowerCase()}.com`}
            url={job.url}
          />
        ))
      )}
    </div>
  );
}