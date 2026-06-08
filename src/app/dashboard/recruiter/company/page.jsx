import React from 'react';
import CompanyProfile from './CompanyProfile'; 
import { getUserSession } from '@/app/lib/session';
import Company from '@/Components/Company';
import { getRecruiterCompany } from '@/app/lib/jobs';

const CompanyPage = async() => {

    const user=await getUserSession();

const company=await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile user={user}></CompanyProfile>
        <Company company={company}></Company>
        </div>
    );
};

export default CompanyPage;