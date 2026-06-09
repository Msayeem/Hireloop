import { getUserSession } from '@/app/lib/session';
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

    return (
        <div>
            <h3>Apply for this job</h3>
        </div>
    );
};

export default ApplyPage;