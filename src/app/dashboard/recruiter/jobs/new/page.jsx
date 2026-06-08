import { getRecruiterCompany } from '@/app/lib/jobs';
import { getUserSession } from '@/app/lib/session';
import NewJobForm from '@/Components/PostJobPage';
import React from 'react';

const NewJob = async() => {

 const user=await getUserSession();

const company=await getRecruiterCompany(user?.id);
console.log(company)
    return (
        <div>

            <NewJobForm company={company}></NewJobForm>
        </div>
    );
};

export default NewJob;