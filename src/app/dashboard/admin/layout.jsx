import { requireRole } from '@/app/lib/session';
import React from 'react';

const AdminDashboardLayout = async({children}) => {
    
    await requireRole('admin')
    
    return children;
};

export default AdminDashboardLayout;