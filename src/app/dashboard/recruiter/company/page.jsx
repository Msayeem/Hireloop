import React from 'react';
import CompanyProfile from './CompanyProfile'; 
import { getUserSession } from '@/app/lib/session';
import Company from '@/Components/Company';
import { getRecruiterCompany } from '@/app/lib/jobs';

const CompanyPage = async() => {

    const user=await getUserSession();

    let company = null;
    let hasError = false;

try{
    if (user?.id){
    company=await getRecruiterCompany(user?.id);
    }
} catch(error){
    hasError=true;
}


    return (
        <div>
            <CompanyProfile user={user}></CompanyProfile>
        {
            !hasError && company &&
            <Company company={company}></Company>
        }
        </div>
    );
};

export default CompanyPage;