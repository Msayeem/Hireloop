import { getCompanies } from '@/app/lib/jobs';
import CompanyTable from '@/Components/CompanyTable';
import React from 'react';

const AdminCompanies = async() => {

const companies=await getCompanies();

    return (
        <div>
            <h1>Companies for review: {companies.length}</h1>

            <CompanyTable companies={companies}></CompanyTable>
        </div>
    );
};

export default AdminCompanies;