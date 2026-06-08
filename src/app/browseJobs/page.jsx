import AllJobs from '@/Components/AllJobs';
import React from 'react';

const BrowseJobs = async() => {

    const res=await fetch(`http://localhost:5000/jobs`);
   const jobData=await res.json();

    return (
      <div className='flex justify-center'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-15'>
            {jobData.map(job=>
                  <AllJobs key={job._id} job={job}></AllJobs>
            )}
        </div>
      </div>
    );
};

export default BrowseJobs;