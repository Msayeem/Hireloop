import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/app/lib/session';
import Company from '@/Components/Company';

const CompanyPage = async() => {

    const user=await getUserSession();
    console.log(user)


const res=await fetch(`http://localhost:5000/companies`);
const data=await res.json();
console.log(data)

    return (
        <div>
            <CompanyProfile data={data}></CompanyProfile>
        <Company data={data}></Company>
        </div>
    );
};

export default CompanyPage;