import { useSession } from '@/app/lib/auth-client';
import React from 'react';

const RecruiterHomePage = () => {

const {data: session, isPending}= useSession();

    return (
        <div>
           dfgsg
        </div>
    );
};

export default RecruiterHomePage;