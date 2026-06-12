import { getApplication, getPlan } from '@/app/lib/jobs';
import { getUserSession } from '@/app/lib/session';
import ApplyForm from '@/Components/ApplyForm';
import Link from 'next/link';
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

const plan=await getPlan(user?.plan);
 if (!plan) {
        return (
            <div>
                <p>Plan not found. Please log out and log back in, then try again.</p>
            </div>
        );
    }


const applications=await getApplication(user?.id)
console.log(applications.length)

 const res=await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
        return <div>Job not found.</div>;
    }
   const job=await res.json();

    return (
        <div>
            <h3>You have applied so far: {applications.length} out of {plan.maxApplicationsPerMonth} application this month</h3>
            {
                applications.length < plan.maxApplicationsPerMonth ?
                <ApplyForm job={job} user={user}></ApplyForm>
                :
                <h1>Purchase plan to apply for more positions. <Link href={'/plans'}>View Plans</Link></h1>
            }

        </div>
    );
};

export default ApplyPage;