import { getApplication } from '@/app/lib/jobs';
import { getUserSession } from '@/app/lib/session';
import ApplyForm from '@/Components/ApplyForm';
import { redirect } from 'next/navigation';
import React from 'react';

const ApplyPage = async({params}) => {
    const {id}=await params;

const user=await getUserSession();
if(!user){
    redirect(`/signIn?redirect=/browseJobs/${id}/apply`)
}

if(user.role !== 'seeker'){
    return('Your are recruiter')
}

const plan={
    name:'Free',
    maxApplication:3
}

const applications=await getApplication(user.id)

 const res=await fetch(`http://localhost:5000/jobs/${id}`);
   const job=await res.json();
    return (
        <div>
            <h3>You have applied so far: {applications.length} out of {plan.maxApplication} application this month</h3>
            {
                applications.length < plan.maxApplication && 
                <ApplyForm job={job} user={user}></ApplyForm>
            }

        </div>
    );
};

export default ApplyPage;