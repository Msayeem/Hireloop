import { getApplication } from '@/app/lib/jobs';
import { getUserSession } from '@/app/lib/session';
import ApplicationsTable from '@/Components/ApplicationsTable';
import React from 'react';

const SeekerApplication = async() => {
    const user=await getUserSession();
    const jobs=await getApplication(user?.id);

    return (
        <div>
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
        </div>
    );
};

export default SeekerApplication;