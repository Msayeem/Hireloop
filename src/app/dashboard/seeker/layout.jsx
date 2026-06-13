import { requireRole } from '@/app/lib/session';
import React from 'react';

const SeekerLayout = async({children}) => {
    await requireRole('seeker')
    return children;
};

export default SeekerLayout;